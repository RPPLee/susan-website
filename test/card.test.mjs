// The digital business card: /card/ and the vCard behind its Save contact button, both built
// from Site settings so the editor keeps them current.
import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { run, loadYaml } from "./jekyll.mjs";

test("the card page and the vCard carry Susan's details from Site settings", () => {
  const destination = mkdtempSync(join(tmpdir(), "metaphase-card-"));
  try {
    const result = run("bundle", ["exec", "jekyll", "build", "--strict_front_matter", "--disable-disk-cache", "--destination", destination]);
    assert.equal(result.status, 0, `jekyll build failed (exit ${result.status})\n${result.stderr}`);
    const { author, social } = loadYaml("_data/settings.yml");

    const page = readFileSync(join(destination, "card/index.html"), "utf8");
    assert.ok(page.includes(`href="tel:${author.phone.replace(/[^\d+]/g, "")}"`), "no tap-to-call link");
    assert.ok(page.includes(`href="mailto:${author.email}"`), "no email link");
    assert.ok(page.includes('href="/assets/susan-mills.vcf"'), "no Save contact link");
    assert.ok(page.includes(social.linkedin), "no LinkedIn link");
    assert.ok(page.includes(author.address), "the mailing address is missing");
    assert.match(page, /<meta property="og:image" content="https:\/\/metaphasemgt.com\/assets\/social\/share-card.png"/);
    assert.ok(existsSync(join(destination, "assets/images/card-qr.png")), "the QR image was not copied");

    const vcf = readFileSync(join(destination, "assets/susan-mills.vcf"), "utf8");
    assert.match(vcf, /^BEGIN:VCARD\r?\nVERSION:3\.0\r?\n/);
    assert.ok(vcf.includes(`FN:${author.name}`));
    assert.ok(vcf.includes(`TEL;TYPE=WORK,VOICE:${author.phone}`));
    assert.ok(vcf.includes(`EMAIL;TYPE=WORK:${author.email}`));
    assert.ok(vcf.includes("ADR;TYPE=WORK:;;PO Box 8480;Berkeley;CA;94707;USA"), "the address is not split into vCard fields");
    assert.ok(vcf.includes(`URL;TYPE=LinkedIn:${social.linkedin}`));
    assert.match(vcf, /PHOTO;ENCODING=b;TYPE=PNG:\r?\n iVBOR/, "the photo is not an embedded PNG, folded after the colon");
    // vCard lines fold at 75 characters, continuation lines start with a space.
    for (const line of vcf.split(/\r?\n/)) assert.ok(line.length <= 76, `a line is longer than 75 characters: ${line.slice(0, 40)}...`);
    assert.match(vcf, /END:VCARD\s*$/);
    assert.doesNotMatch(vcf, /---/, "front matter leaked into the vCard");
  } finally {
    rmSync(destination, { recursive: true, force: true });
  }
});

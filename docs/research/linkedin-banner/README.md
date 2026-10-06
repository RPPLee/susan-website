# LinkedIn banners

`banner.html` is the source of `assets/social/linkedin-banner-personal-{dark,light}.png`. Susan asked
on 2026-09-14 for the headline and the logo only, so the tagline line and the gold rule are gone.
The logo images are cut from the earlier renders; swap them to change the logo.

Render both versions at LinkedIn's 1584 by 396:

```sh
for v in dark light; do
  sed "s/VARIANT/$v/g" banner.html > /tmp/banner-$v.html
  cp logo-$v.png /tmp/
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
    --hide-scrollbars --force-device-scale-factor=1 --window-size=1584,396 --virtual-time-budget=8000 \
    --screenshot=../../../assets/social/linkedin-banner-personal-$v.png "file:///tmp/banner-$v.html"
done
```

The headline is Archivo from Google Fonts, so the render needs the network.

`company.html` is the source of `assets/social/linkedin-banner-company-{dark,light}.png`, rebuilt on
2026-10-06 to match the earlier render. It is 1512 by 256 and keeps the text right of LinkedIn's logo
tile. Render it the same way with `--window-size=1512,256`; it uses `logo-graphic.svg`, the
transparent logo from the share images.

On 2026-10-06 both headlines changed from "Navigate the journey from Idea to Impact" to "From Idea to
Impact", and the dark versions were uploaded to Susan's profile and the company page.

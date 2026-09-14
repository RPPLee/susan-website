# LinkedIn personal banner

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

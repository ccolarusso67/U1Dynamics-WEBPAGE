/* U1DYNAMICS · v3 — Tweaks panel: accent, density, hero variant */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "bronze",
  "density": "normal",
  "heroVariant": "photo",
  "showCursor": true,
  "showLoader": true
}/*EDITMODE-END*/;

function applyTweaks(t) {
  const root = document.documentElement;
  const accents = {
    bronze:  { amber:"#c8915a", deep:"#9c6c3e", glow:"#e0b685" },
    sage:    { amber:"#9bb18b", deep:"#6e8462", glow:"#b9cdab" },
    oxblood: { amber:"#b56a5a", deep:"#854a3e", glow:"#d28c7e" },
    steel:   { amber:"#7e98b1", deep:"#536d85", glow:"#a3bdd6" },
  };
  const a = accents[t.accent] || accents.bronze;
  root.style.setProperty('--amber', a.amber);
  root.style.setProperty('--amber-deep', a.deep);
  root.style.setProperty('--amber-glow', a.glow);

  document.body.dataset.density = t.density || "normal";
  document.body.dataset.heroVariant = t.heroVariant || "photo";
  document.body.dataset.cursor = t.showCursor ? "on" : "off";
  document.body.dataset.loader = t.showLoader ? "on" : "off";
}

function Tweaks() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useEffect(() => { applyTweaks(tweaks); }, [tweaks]);

  return (
    <TweaksPanel title="Tweaks · v3">
      <TweakSection title="Accent">
        <TweakRadio value={tweaks.accent} onChange={v => setTweak('accent', v)}
          options={[
            {value:"bronze",  label:"Bronze"},
            {value:"sage",    label:"Sage"},
            {value:"oxblood", label:"Ox"},
            {value:"steel",   label:"Steel"},
          ]} />
      </TweakSection>
      <TweakSection title="Density">
        <TweakRadio value={tweaks.density} onChange={v => setTweak('density', v)}
          options={[
            {value:"tight",   label:"Tight"},
            {value:"normal",  label:"Normal"},
            {value:"spacious",label:"Spacious"},
          ]} />
      </TweakSection>
      <TweakSection title="Hero">
        <TweakRadio value={tweaks.heroVariant} onChange={v => setTweak('heroVariant', v)}
          options={[
            {value:"photo",   label:"Photo"},
            {value:"fluid",   label:"Fluid"},
            {value:"both",    label:"Both"},
          ]} />
      </TweakSection>
      <TweakSection title="Chrome">
        <TweakToggle label="Custom cursor" value={tweaks.showCursor} onChange={v => setTweak('showCursor', v)} />
        <TweakToggle label="Boot loader"   value={tweaks.showLoader} onChange={v => setTweak('showLoader', v)} />
      </TweakSection>
    </TweaksPanel>
  );
}

Object.assign(window, { Tweaks, TWEAK_DEFAULTS });

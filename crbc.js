window.CRBC_PROFILE={
code:"CRBC",name:"2.0 TDI",family:"EA288",displacement:"1968 cm3",bore:"81.0 mm",stroke:"95.5 mm",
compression:"16.2:1",power:"110 kW @ 3500–4000 rpm",torque:"320 Nm @ 1750–3000 rpm",ecu:"Bosch EDC17",
fuel:"Diesel EN 590",emissions:"EU5",aftertreatment:"EGR + oxidation catalyst + DPF",
gearboxes:[{code:"02Q",name:"MQ350-6F/6A",type:"6-speed manual",drive:"FWD / AWD"},{code:"0D9",name:"DQ250-6F",type:"6-speed dual-clutch",drive:"FWD"}],
systems:[
["Razvod","Zupčasti kaiš","Pokreće bregastu, visokopritisnu pumpu i pumpu rashladne tečnosti."],
["Uljni sistem","Dvostepena regulisana pumpa","N428 reguliše nivo pritiska; F1 i F378 nadziru pritisak."],
["Senzor ulja","G266","Nivo i temperatura motornog ulja."],
["Usis","Vodeno hlađen charge-air cooler","Integrisan u usisni modul EA288."],
["Emisije","EGR + DOC + DPF","Fabrička CRBC konfiguracija iz SSP 514."]
],
diagnostics:[
["Pritisak ulja","Proveri F1, F378 i N428; kod sumnje potvrdi mehaničkim manometrom."],
["DPF","Posmatraj diferencijalni pritisak, soot/ash vrednosti, temperature izduva i status regeneracije; granice vezati za fabrički repair data."],
["EGR / protok vazduha","Uporedi MAF specified/actual i EGR komandu/stvarni odziv; proveri usis i charge-air sistem pre zaključka o EGR-u."],
["Boost","Loguj requested/actual boost i aktuator turbine pod opterećenjem; ne postavljaj univerzalnu granicu bez radnih uslova."],
["Common rail","Uporedi specified/actual rail pressure tokom verglanja, ler-a i opterećenja; pragove vezati za fabričku proceduru."]
],
service:[
["Motorno ulje","VIN / servisni režim","VW navodi LongLife ulja pogodna za dizel sa DPF; tačnu normu i količinu potvrditi po VIN-u/repair data."],
["0D9 / DQ250","Varijanta vozila","Interval, tačnu količinu i proceduru prikazati tek kada su potvrđeni za konkretnu EU konfiguraciju."],
["Razvod","VIN / tržište","Ne prikazivati jedan univerzalni interval dok nije potvrđen za konkretnu servisnu specifikaciju."]
],
source:"Volkswagen SSP 513 / SSP 514",verified:true
};
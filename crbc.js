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
liveData:[
["Pritisak ulja • niski stepen","1.8–2.0 bar","Ciljna vrednost pumpe EA288; kod dijagnostike greške pritiska potvrdi vrednost mehaničkim manometrom."],
["Pritisak ulja • visoki stepen","3.8–4.2 bar","Ciljna vrednost pumpe EA288; aktivni stepen zavisi od opterećenja, obrtaja i temperature ulja."],
["F378 reduced oil-pressure switch","otvara ispod 0,3–0,6 bar","Ako se signal upozorenja ne poklapa sa mehanički izmerenim pritiskom, proveri prekidač i instalaciju."],
["F1 oil-pressure switch","zatvara na 2,3–3,0 bar","ECU koristi ovaj signal za potvrdu da je pritisak iznad niskog stepena."],
["Dovodni pritisak goriva","3.5–5.0 bar","Niskopritisna dovodna strana; proveriti pre sumnje na visokopritisnu pumpu ili Common Rail sistem."],
["Povrat goriva sa dizni","0.4–1.0 bar","Ventil za održavanje pritiska drži povratni vod približno na 1 bar."],
["Rail pressure • G247","Zadata / stvarna vrednost","Uporedi tokom verglanja, ler-a i opterećenja; ne postoji jedna univerzalna vrednost pritiska za sve režime rada."],
["MAF • G70","Zadata / stvarna vrednost / trend","Posmatraj zajedno sa komandom EGR-a i trenutnim režimom rada motora."],
["Boost • G31","Zadata / stvarna vrednost","Loguj zajedno sa N75 i G581 pod kontrolisanim opterećenjem; procenjuj odstupanje zadate i stvarne vrednosti, a ne jednu univerzalnu vrednost pritiska punjenja."],
["Charge-air temp • G811","Trend posle hladnjaka punjenja","Uporedi sa G42 i opterećenjem motora; korisno za proveru efikasnosti hlađenja usisnog vazduha."],
["DPF differential pressure • G505","Trend u odnosu na protok izduvnih gasova","Tumači zajedno sa izračunatom količinom čađi/pepela i temperaturama izduvnih gasova."],
["EGT • G235/G495/G648","Trend / stanje regeneracije","Proveri logičnost senzora i redosled temperatura; vrednosti snažno zavise od opterećenja i stanja regeneracije."],
["EGR position • G466","Komanda / stvarni položaj","Uporedi sa promenom MAF-a i radom usisne klapne."]
],
symptoms:[
{title:"Underboost / slab boost",steps:["Sačuvaj DTC + freeze frame; ne briši greške pre logovanja.","Loguj G31 boost specified/actual zajedno sa N75 i G581 položajem aktuatora pod kontrolisanim opterećenjem.","Proveri charge-air put: creva, spojeve, intercooler/usisni modul i tragove curenja.","Ako komanda aktuatora i stvarni položaj odstupaju, proveri aktuator/ožičenje i mehaniku turbine.","Ako aktuator prati komandu, a boost ostaje nizak, proveri curenje, izduv pre turbine i sposobnost turbine da napravi protok/pritisak."]},
{title:"DPF / česte regeneracije",steps:["Očitaj soot/ash model, G505 diferencijalni pritisak, EGT senzore i status poslednje regeneracije.","Uporedi G505 sa ugašenim motorom i kroz više režima protoka; traži nelogičan offset ili trend.","Proveri creva G505 na začepljenje, kondenzat, oštećenje ili pogrešno povezivanje.","Proveri G235/G495/G648 plausibility; bez pouzdane temperature ECU ne može pravilno voditi regeneraciju.","Tek posle senzora/protoka proceni stvarno opterećenje DPF-a i uzrok prekomernog stvaranja čađi."]},
{title:"Low oil pressure",steps:["Odmah razlikuj električnu prijavu od stvarnog pada pritiska; ne opterećuj motor sa aktivnim upozorenjem.","Proveri nivo/temperaturu G266 i stanje/odgovarajuće ulje.","Proveri F378 i F1 signal/ožičenje; njihove SSP pragove uporedi sa stanjem motora.","Potvrdi pritisak mehaničkim manometrom pre zamene senzora ili pumpe.","Ako je mehanički nizak, proveri N428 prebacivanje stepena, pumpu, usis ulja/filter i unutrašnje gubitke pritiska."]},
{title:"EGR / MAF odstupanje",steps:["Loguj G70 MAF, EGR komandu/položaj G466 i radno stanje motora.","Promena EGR komande mora dati logičnu promenu svežeg vazduha; traži neslaganje command/feedback.","Proveri usis/charge-air na curenje ili restrikciju pre zaključka da je EGR neispravan.","Proveri klapnu usisa i EGR mehaniku/ožičenje.","Na kraju proveri plausibility MAF-a u više režima, ne samo jednu mg/str vrednost u leru."]},
{title:"Rail pressure / teško pali",steps:["Proveri napon i brzinu verglanja, pa očitaj G247 rail specified/actual tokom starta.","Proveri niskopritisni dovod goriva; SSP EA288 navodi približno 3.5–5.0 bar na dovodnoj strani.","Ako dovod postoji, proveri curenje/povrat injektora i regulaciju visokog pritiska.","Uporedi ponašanje rail-a hladan/topao i tokom opterećenja; traži da li actual prati specified.","Tek nakon hidrauličkih provera sumnjaj na visokopritisnu pumpu, regulator ili injektore."]}
],
source:"Volkswagen SSP 513 / SSP 514",verified:true
};
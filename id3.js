window.ID3_PROFILE={
name:"Volkswagen ID.3",platform:"MEB",years:"2020–2025",drive:"Rear-wheel drive",gearbox:"1-speed reduction gear",
batteries:[
["45 kWh net","7 modules","Entry battery","Up to 110 kW drive"],
["58 kWh net","9 modules","Pro / Pro Performance","107–150 kW drive"],
["77 kWh net","12 modules","Pro S","150 kW drive"]
],
systems:[
["HV battery","MEB modular battery","Floor-mounted lithium-ion battery; module count depends on battery size."],
["Electric drive","Rear axle","Original ID.3 MEB generation uses a rear-mounted electric drive; APP310 is the earlier drive family."],
["Power electronics","Inverter / drive electronics","Converts HV DC battery energy to controlled AC for the traction motor and manages recuperation."],
["Charging","AC / DC CCS","Charging power depends on battery/version/software; identify exact vehicle before applying a maximum value."],
["Thermal management","Battery / drive cooling","Assess coolant circuits, temperatures and commanded thermal-management state together."],
["12 V system","Low-voltage supply","12 V stability is essential for control units, contactor sequencing and vehicle wake-up."]
],
liveData:[
["HV battery SOC","Actual / displayed","Compare battery-management SOC with customer complaint and charging state; do not diagnose capacity from dashboard SOC alone."],
["HV battery voltage","Pack actual","Evaluate only with identified battery variant, SOC and operating state; avoid a single universal pack-voltage limit."],
["Cell voltage spread","Min / Max / Δ","A useful indicator of imbalance. Evaluate at comparable SOC/load and follow VW repair data for limits."],
["Battery temperatures","Min / Max / average","Compare sensor plausibility and temperature spread; large differences can affect charging and power availability."],
["HV insulation resistance","Measured / status","Treat as a high-voltage safety parameter. Follow VW guided diagnostics and HV safety procedure; do not use an arbitrary universal pass/fail value."],
["Contactor state","Open / closed / request","Useful for no-READY and HV activation faults; correlate request, feedback and interlock status."],
["DC charging request","Requested / actual","Compare charger request, battery limits, temperature and SOC when investigating slow DC charging."],
["AC charging","Voltage / current / phases","Check supply conditions and onboard-charger request/actual values before condemning vehicle hardware."],
["Drive motor temperature","Actual / trend","Trend with inverter temperature, coolant temperature and load."],
["Inverter temperature","Actual / trend","Check plausibility and thermal derating under sustained load."],
["12 V system voltage","Supply / DC-DC state","Low 12 V supply can create multiple communication and HV activation faults; verify battery condition and DC-DC operation."]
],
diagnostics:[
["No READY","Scan all control units first; verify 12 V supply, HV interlock, crash status, contactor request/feedback and isolation-related faults before component replacement."],
["HV insulation fault","Make the vehicle safe according to VW HV procedure. Use guided fault finding to isolate battery, drive, power electronics, heater/AC compressor or HV cabling; do not megger connected electronics indiscriminately."],
["Slow / no DC charging","Check charger/station conditions, SOC, battery temperature, charge limits and DTCs. Compare requested versus actual charging power before suspecting the charge port or battery."],
["AC charging fault","Verify mains voltage/phases and EVSE first, then charge-port status, locking, onboard charger communication and thermal conditions."],
["Reduced drive power","Check SOC, battery and drive temperatures, inverter/motor derating states and HV battery power limits."],
["12 V / communication faults","Load-test the 12 V battery and inspect DC-DC operation and grounds before chasing multiple unrelated network DTCs."]
],
symptoms:[
{title:"Vehicle does not enter READY",steps:["Perform a complete diagnostic scan and save DTC/freeze-frame data.","Check 12 V battery voltage under wake-up/load and verify stable terminal supply.","Check HV interlock and service-disconnect/connector status according to repair procedure.","Compare HV contactor request and feedback; note any isolation or crash shut-down status.","Only after system-level checks isolate the affected HV component using guided diagnostics."]},
{title:"DC charging is much slower than expected",steps:["Record SOC, battery temperatures, ambient temperature and charger capability.","Read requested and actual DC charging power/current; identify whether the limitation is vehicle-side or charger-side.","Check active battery thermal-management state and any charging/power-limit flags.","Check DTCs in battery management, charging electronics and thermal-management modules.","Compare against the exact battery/version/software charging specification; peak charging power is not constant across SOC."]},
{title:"HV isolation / insulation warning",steps:["Stop treating the vehicle as a normal low-voltage diagnostic job and apply HV safety procedure.","Read the isolation measurement/status and associated DTC context before disconnecting components.","Inspect for coolant/water ingress or damaged HV connectors/cables where safely accessible.","Use the manufacturer isolation strategy to separate battery, drive and HV auxiliaries.","After repair, verify isolation status through the prescribed diagnostic procedure before re-energising."]},
{title:"Multiple random DTCs / wake-up problems",steps:["Check the 12 V battery first, including voltage drop under load.","Verify DC-DC converter operation when the vehicle is active.","Inspect grounds, terminal connections and network wake-up behaviour.","Clear faults only after recording them, then reproduce the symptom.","Separate consequential undervoltage/network faults from the original fault."]}
],
service:[
["HV safety","Qualified personnel","De-energising, proving absence of voltage and re-energising must follow VW repair information and local HV safety requirements."],
["HV battery","Variant / VIN","Battery construction and repair strategy vary by production date and battery version; confirm exact PR/VIN data before module or pack work."],
["Reduction gear","Variant-specific","Do not publish one oil quantity/specification until verified against the exact drive-unit code and VW repair data."],
["Coolant circuits","Variant-specific","Use the exact coolant specification, filling/bleeding procedure and diagnostic activation for the vehicle configuration."],
["Software / campaigns","VIN-specific","Check current VW campaign/software status when diagnosing charging, battery-management or infotainment-related complaints."]
],
source:"Volkswagen Newsroom technical data / MEB battery information",verified:true
};
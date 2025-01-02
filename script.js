document.addEventListener('DOMContentLoaded', function () {
    const states = {
        "FCT": [
        "Abaji", "Bwari", "Gwagwalada", "Kuje", "Municipal", "Nyanya"],
        
       "Abia": [
        "Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano", "Isiala Ngwa North", "Isiala Ngwa South", 
        "Isuikwuato", "Obingwa", "Ohafia", "Osisioma", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umuahia North", 
        "Umuahia South", "Umunneochi"
    ],
    "Adamawa": [
        "Demsa", "Fufore", "Ganye", "Girei", "Guyuk", "Hong", "Jada", "Lamurde", "Madagali", "Maiha", 
        "Mayo-Belwa", "Michika", "Mubi North", "Mubi South", "Numan", "Shelleng", "Song", "Toungo", 
        "Yola North", "Yola South", "Gombi"
    ],
    "Akwa Ibom": [
        "Abak", "Eastern Obolo", "Eket", "Esit Eket", "Essien Udim", "Etim Ekpo", "Ibeno", "Ibesikpo Asutan", 
        "Ibiono Ibom", "Ikot Abasi", "Ikot Ekpene", "Ini", "Itu", "Mbo", "Mkpat Enin", "Nsit Atai", "Nsit Ibom", 
        "Nsit Ubium", "Obot Akara", "Offot", "Okobo", "Onna", "Oruk Anam", "Udung Uko", "Uruan", "Uyo", "Oruk Anam", 
        "Abak", "Essien Udim", "Ikot Abasi", "Uyo"
    ],
    "Anambra": [
        "Aguata", "Anambra East", "Anambra West", "Awka North", "Awka South", "Dunukofia", "Ekwusigo", "Idemili North", 
        "Idemili South", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", 
        "Orumba North", "Orumba South", "Oyi", "Obosi"
    ],
    "Bauchi": [
        "Alkaleri", "Bauchi", "Bogoro", "Damban", "Darazo", "Dass", "Gamawa", "Ganjuwa", "Itas/Gadau", "Jama'are", 
        "Katagum", "Kirfi", "Misau", "Ningi", "Shira", "Tafawa Balewa", "Toro", "Zaki", "Bauchi North", "Bauchi South"
    ],
    "Bayelsa": [
        "Brass", "Ekeremor", "Kolokuma/Opokuma", "Nembe", "Ogbia", "Sagbama", "Southern Ijaw", "Yenagoa"
    ],
    "Benue": [
        "Ado", "Agatu", "Apa", "Buruku", "Gboko", "Guma", "Gwer-East", "Gwer-West", "Katsina-Ala", "Konshisha", 
        "Kwande", "Logo", "Makurdi", "Obi", "Ogbadibo", "Ohimini", "Otukpo", "Tarka", "Ukum", "Ushongo", 
        "Vandeikya", "Guma", "Gwer-west"
    ],
       "Borno": [
        "Abadam", "Askira/Uba", "Bama", "Bayo", "Biu", "Chibok", "Damboa", "Dikwa", "Gubio", "Gwoza", 
        "Hawul", "Jere", "Kaga", "Kala/Balge", "Konduga", "Kukawa", "Kwaya Kusar", "Mafa", "Magumeri", 
        "Maiduguri", "Marte", "Mobbar", "Monguno", "Ngala", "Nganzai", "Shani"
    ],
    "Cross River": [
        "Akamkpa", "Biase", "Boki", "Calabar Municipal", "Calabar South", "Ikom", "Ogoja", "Obubra", "Obudu", 
        "Odukpani", "Yakuur", "Yakurr", "Etung", "Akpabuyo", "Bakassi", "Ugep", "Boki", "Calabar", "Ogoja"
    ],
    "Delta": [
        "Aniocha North", "Aniocha South", "Bomadi", "Burutu", "Isoko North", "Isoko South", "Ika North East", 
        "Ika South", "Udu", "Ughelli North", "Ughelli South", "Okpe", "Sapele", "Ukwuani", "Ethiope East", 
        "Ethiope West", "Warri South", "Warri North", "Warri South West", "Ndokwa East", "Ndokwa West", "Asaba", 
        "Delta North", "Delta South", "Delta Central"
    ],
    "Ebonyi": [
        "Abakaliki", "Afikpo North", "Afikpo South", "Ishielu", "Ivo", "Izzi", "Ohaozara", "Ohaukwu", 
        "Onicha", "Ebonyi North", "Ebonyi South", "Ebonyi East"
    ],
    "Edo": [
        "Akoko-Edo", "Egor", "Esan Central", "Esan North-East", "Esan South-East", "Esan West", "Etsako Central", 
        "Etsako East", "Etsako West", "Igueben", "Ikpoba-Okha", "Oredo", "Orhionmwon", "Ovia North-East", 
        "Ovia South-West", "Uhunmwonde"
    ],
    "Ekiti": [
        "Ado-Ekiti", "Efon", "Ekiti East", "Ekiti South-West", "Ekiti West", "Emure", "Irepodun/Ifelodun", "Ise/Orun", 
        "Moba", "Oye"
    ],
    "Enugu": [
        "Agbani", "Awgu", "Enugu East", "Enugu North", "Enugu South", "Igbo Etiti", "Igbo Eze North", 
        "Igbo Eze South", "Isi-Uzo", "Nkanu East", "Nkanu West", "Nsukka", "Oji River", "Udenu", "Udi", 
        "Uzo-Uwani"
    ],
    "Gombe": [
        "Akko", "Balanga", "Billiri", "Dukku", "Funakaye", "Gombe", "Kaltungo", "Kwami", "Nafada", "Shongom", "Yamaltu/Deba"
    ],
    "Imo": [
        "Aboh Mbaise", "Ahiazu Mbaise", "Ikeduru", "Isiala Mbano", "Isu", "Mbaitoli", "Ngor-Okpala", "Njaba", 
        "Nwangele", "Obowo", "Oguta", "Ohaji/Egbema", "Orlu", "Orsu", "Oru East", "Oru West", "Owerri Municipal", 
        "Owerri North", "Owerri West", "Unuimo"
    ],
    "Jigawa": [
        "Auyo", "Babura", "Birniwa", "Buji", "Dutse", "Gagarawa", "Garki", "Gumel", "Guri", "Hadejia", "Jahun", 
        "Kafin-Hausa", "Kaugama", "Kazaure", "Kiri Kasama", "Maigatari", "Malam Madori", "Miga", "Ringim", 
        "Roni", "Sule Tankarkar", "Taura", "Yankwashi"
    ],
    "Kaduna": [
        "Birnin-Gwari", "Chikun", "Giwa", "Igabi", "Ikara", "Jaba", "Jema'a", "Kachia", "Kaduna North", "Kaduna South", 
        "Kagarko", "Kauru", "Kubau", "Kudan", "Lere", "Makarfi", "Sabon Gari", "Sanga", "Soba", "Zangon Kataf", "Zaria"
    ],
    "Kano": [
        "Ajingi", "Albasu", "Bagwai", "Bebeji", "Bichi", "Bunkure", "Dala", "Dambatta", "Dawakin Kudu", "Dawakin Tofa", 
        "Doguwa", "Fagge", "Gaya", "Gezawa", "Gwale", "Kabo", "Kano Municipal", "Karaye", "Kibiya", "Kiru", 
        "Kumbotso", "Kunchi", "Kura", "Madobi", "Makoda", "Minjibir", "Nasarawa", "Rano", "Rimin Gado", 
        "Shanono", "Sumaila", "Takai", "Tarauni", "Tofa", "Tsanyawa", "Tudun Wada", "Ungogo", "Warawa", "Wudil"
    ],
    "Katsina": [
        "Bakori", "Batagarawa", "Batsari", "Baure", "Bindawa", "Charanchi", "Dandume", "Danmusa", "Daura", 
        "Dutsi", "Dutsinma", "Funtua", "Ingawa", "Jibia", "Kafur", "Kaita", "Kankara", "Katsina", "Kurfi", 
        "Mai'adua", "Malumfashi", "Mani", "Mashi", "Musawa", "Rimi", "Sabuwa", "Safana", "Sandamu", "Zango"
    ],
    "Kebbi": [
        "Aleiro", "Arewa", "Augie", "Bagudo", "Birnin Kebbi", "Bunza", "Dandi", "Gwandu", "Jega", "Kalgo", 
        "Koko/Besse", "Maiyama", "Ngaski", "Sakaba", "Shanga", "Suru", "Wasagu/Danko", "Yauri", "Zuru"
    ],
    "Kogi": [
        "Adavi", "Ajaokuta", "Ankpa", "Bassa", "Dekina", "Ibaji", "Idah", "Igalamela-Odolu", "Ijumu", "Kabba/Bunu", 
        "Kogi", "Lokoja", "Mopa-Muro", "Ofu", "Ogori/Mangongo", "Okehi", "Okene", "Olamaboro", "Omala", "Yagba East", 
        "Yagba West"
    ],
    "Kwara": [
        "Asa", "Baruten", "Edu", "Ekiti", "Ilorin East", "Ilorin South", "Ilorin West", "Irepodun", "Isin", 
        "Kaiama", "Moro", "Offa", "Oke-Ero", "Oyun", "Patigi"
    ],
    "Lagos": [
        "Agege", "Ajeromi-Ifelodun", "Alimosho", "Amuwo-Odofin", "Apapa", "Badagry", "Bakasi", "Epe", "Eti-Osa", 
        "Ibeju-Lekki", "Ifako-Ijaiye", "Ikeja", "Ikorodu", "Kosofe", "Lagos Mainland", "Lagos Island", 
        "Mushin", "Ojo", "Oshodi-Isolo", "Shomolu", "Surulere"
    ],
    "Nasarawa": [
        "Akwanga", "Angwan Lamba", "Doma", "Karu", "Keffi", "Kokona", "Lafia", "Nasarawa", "Nasarawa Eggon", 
        "Obi", "Toto", "Wamba"
    ],
    "Niger": [
        "Agaie", "Agwara", "Bida", "Borgu", "Bosso", "Chanchaga", "Edati", "Gbara", "Gbako", "Gulu", "Katcha", 
        "Kontagora", "Lavun", "Magama", "Mariga", "Mashegu", "Mokwa", "Moya", "Paikoro", "Rafi", "Rijau", 
        "Shiroro", "Suleja", "Tafa", "Wushishi"
    ],
    "Ogun": [
        "Abeokuta North", "Abeokuta South", "Ado-Odo/Ota", "Ewekoro", "Ifo", "Ijebu East", "Ijebu North", 
        "Ijebu North East", "Ijebu Ode", "Ikenne", "Imeko Afon", "Ipokia", "Obafemi-Owode", "Odeda", "Odogbolu", 
        "Ogun Waterside", "Remo North", "Shagamu"
    ],
    "Ondo": [
        "Akoko North-East", "Akoko North-West", "Akoko South-East", "Akoko South-West", "Akure North", 
        "Akure South", "Ese-Odo", "Idanre", "Ifedore", "Ilaje", "Ile-Oluji/Okeigbo", "Irele", "Odigbo", 
        "Okitipupa", "Ondo East", "Ondo West", "Ose", "Owo"
    ],
    "Osun": [
        "Aiyedade", "Aiyedire", "Atakumosa East", "Atakumosa West", "Boluwaduro", "Boripe", "Egbedore", "Ejigbo", 
        "Ife Central", "Ife East", "Ife North", "Ife South", "Ilesa East", "Ilesa West", "Irepodun", "Irewole", 
        "Isokan", "Iwo", "Obokun", "Odo-Otin", "Olorunda", "Osogbo"
    ],
    "Oyo": [
        "Akinyele", "Atiba", "Atigbo", "Egbeda", "Ibadan North", "Ibadan North-East", "Ibadan North-West", 
        "Ibadan South-East", "Ibadan South-West", "Ibarapa Central", "Ibarapa East", "Ibarapa North", 
        "Ido", "Iseyin", "Itesiwaju", "Iwaparan", "Kajola", "Lagelu", "Ogbomosho North", "Ogbomosho South", 
        "Olorunsogo", "Oluyole", "Ona-Ara", "Saki East", "Saki West", "Surulere"
    ],
    "Plateau": [
        "Barkin Ladi", "Bassa", "Bokkos", "Jos East", "Jos North", "Jos South", "Kanam", "Kanke", "Langtang North", 
        "Langtang South", "Mangu", "Mikang", "Pankshin", "Qua'an Pan", "Riyom", "Shendam", "Wase"
    ],
    "Rivers": [
        "Ahoada East", "Ahoada West", "Akuku-Toru", "Andoni", "Bonny", "Degema", "Emohua", "Ikwerre", "Khana", 
        "Obio/Akpor", "Ogba/Egbema/Ndoni", "Ogu/Bolo", "Okrika", "Omuma", "Opobo/Nkoro", "Port Harcourt", 
        "Tai"
    ],
    "Sokoto": [
        "Binji", "Bodinga", "Dange/Shuni", "Gada", "Goronyo", "Gudu", "Illela", "Kebbe", "Kware", "Rabah", 
        "Shagari", "Silame", "Sokoto North", "Sokoto South", "Tambuwal", "Tureta", "Wamako", "Wurno", "Yabo"
    ],
    "Taraba": [
        "Ardo Kola", "Bali", "Donga", "Gashaka", "Gassol", "Ibi", "Jalingo", "Karim Lamido", "Kumi", "Lau", 
        "Sardauna", "Takum", "Ussa", "Wukari", "Yorro", "Zing"
    ],
    "Yobe": [
        "Bade", "Bursari", "Damaturu", "Fika", "Fune", "Geidam", "Gujba", "Gulani", "Jakusko", "Karasuwa", 
        "Machina", "Nangere", "Nguru", "Potiskum", "Tarmuwa", "Yunusari", "Yobe South", "Yobe North"
    ],
    "Zamfara": [
        "Anka", "Bakura", "Birnin Magaji/Kiyaw", "Bukkuyum", "Gummi", "Gusau", "Isa", "Kaura Namoda", 
        "Maru", "Shinkafi", "Talata Mafara", "Zurmi"
    ]
    };

    const stateSelect = document.getElementById('state');
    const lgaSelect = document.getElementById('lga');

    // Populate states dropdown
    for (const state in states) {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    }

    // Handle state change event
    stateSelect.addEventListener('change', function () {
        const selectedState = stateSelect.value;
        lgaSelect.innerHTML = ""; // Clear existing LGAs
        const defaultOption = document.createElement('option');
        defaultOption.textContent = "Select Local Government Area";
        lgaSelect.appendChild(defaultOption);

        if (selectedState && states[selectedState]) {
            // Populate the LGAs based on the selected state
            states[selectedState].forEach(function (lga) {
                const option = document.createElement('option');
                option.value = lga;
                option.textContent = lga;
                lgaSelect.appendChild(option);
            });
            lgaSelect.disabled = false; // Enable LGA select
        } else {
            lgaSelect.disabled = true; // Disable LGA select if no state is selected
        }
    });
});

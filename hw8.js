// Task 1
const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};
function findValueByKey(companyName, company) {

    if (company.name.toString().toLowerCase() === companyName.toLowerCase()) {
        const tempCompany = {};

        for (let key in company) {
            tempCompany[key] = company[key];
        }
        if (company.clients && Array.isArray(company.clients)) {
            tempCompany.clients = company.clients.map(client => client.name);
        }
        if (company.partners && Array.isArray(company.partners)) {
            tempCompany.partners = company.partners.map(partner => partner.name);
        }
        return tempCompany;
    }

    if (company.clients) {
        for (let i = 0; i < company.clients.length; i++) {
            const foundCompany = findValueByKey(companyName, company.clients[i]);
            if (foundCompany) {
                return foundCompany;
            }
        }
    }

    if (company.partners ) {
        for (let i = 0; i < company.partners.length; i++) {
            const foundCompany = findValueByKey(companyName, company.partners[i]);
            if (foundCompany){
                return foundCompany;
            }
        }
    }
    return null;
}
const foundCompany = findValueByKey('Клієнт 2', company);
if (foundCompany) {
    console.log(foundCompany);
} else {
    console.log("Компанію не знайдено");
}
// Task 2
let movie= {
    title: "Here we are",
    year: 2006,
    country: "USA",

    getInfo(){
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(key + ': ' + this[key]);
            }
        }
    }
}
movie.newProperty = 'Нова властивість!';
movie.getInfo();









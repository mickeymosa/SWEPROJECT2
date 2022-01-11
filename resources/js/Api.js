export default class Api {
    getTransactions(page) {
        return axios.post('/graphql', {query: `query {
            transactions(page: ${page}) {
                data {
                    id
                    amount
                    brand {
                        id
                        name
                        category {
                            name
                            type
                        }
                    }
                }
                paginatorInfo {
                    hasMorePages
                }
            }
         }`});
    }

    updateTransaction({id, amount, brand}) {
        return axios.post('/graphql', {query: `mutation {
            updateTransaction(id: ${id} amount: ${amount} brand_id: ${brand}) {
                id
                amount
                brand {
                    id
                    name
                    category {
                        name
                        type
                    }
                }
            }
         }`});
    }

    getAllBrands() {
        return axios.post('/graphql', {query: `query { 
            allBrands { 
                id 
                name
                category {
                    name
                }
            } 
        }`});
    }

    getBrands(page) {
        return axios.post('/graphql', {query: `query {
            brands(page: ${page}) {
                data {
                    id
                    name
                    category {
                        id
                        name
                    }
                }
                paginatorInfo {
                    hasMorePages
                }
            }
         }`});
    }

    updateBrand({id, name, category}) {
        return axios.post('/graphql', {query: `mutation {
            updateBrand(id: ${id} name: "${name}" category_id: ${category}) {
                id
                name
                category {
                    id
                    name
                }
            }
         }`});
    }

    getAllCategories() {
        return axios.post('/graphql', {query: `query { 
            allCategories { 
                id 
                name
            } 
        }`});
    }

    getCategories(page) {
        return axios.post('/graphql', {query: `query {
            categories(page: ${page}) {
                data {
                    id
                    name
                    type
                }
                paginatorInfo {
                    hasMorePages
                }
            }
         }`});
    }

    updateCategory({id, name, type}) {
        return axios.post('/graphql', {query: `mutation {
            updateCategory(id: ${id} name: "${name}" type: "${type}") {
                id
                name
                type
            }
         }`});
    }

    getSmsTemplates() {
        return axios.post('/graphql', {query: `query { 
            smsTemplates { 
                body
            } 
        }`});
    }

    getSms(page) {
        return axios.post('/graphql', {query: `query {
            sms(page: ${page}) {
                data {
                    id
                    body
                    transaction_id
                }
                paginatorInfo {
                    hasMorePages
                }
            }
         }`});
    }

    createSms({sms}) {
        return axios.post('/graphql', {query: `mutation {
            createSms(body: """${sms}""") {
                id
                body
                transaction_id
            }
         }`});
    }

    updateSms({id}) {
        return axios.post('/graphql', {query: `query { 
            updateSms(id: ${id}) { 
                id
                body
                transaction_id
            } 
        }`});
    }
}
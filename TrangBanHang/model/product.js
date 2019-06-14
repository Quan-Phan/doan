var connect_database=require('../dbs/index');

module.exports = {
    list: () => {
        var queryContent = `SELECT * FROM products`;
        return connect_database.load(queryContent);
    },
    findByOffset:(limit,offset)=>{
        var query=`SELECT * FROM products LIMIT ${limit} OFFSET ${offset} `;
        return connect_database.load(query);
    },
    detail_product:(id)=>{
        var query="SELECT * FROM products WHERE id= '" +id+"'";
        return connect_database.load(query);
    }
};


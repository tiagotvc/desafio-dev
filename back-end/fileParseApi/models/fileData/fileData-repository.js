const db = require('../index')
const FileData = db.fileData;
const Op = db.Sequelize.Op;
const sequelize = db.sequelize;

async function getValueByType()  {
    return await FileData.findAll({
        attributes: [
            ['shop_owner','name'],
            [ sequelize.fn('SUM', sequelize.fn('IF', sequelize.literal('`type` = 1'), sequelize.col('value'),0)), 'Débito' ],
            [ sequelize.fn('SUM', sequelize.fn('IF',sequelize.literal('`type` = 2'), sequelize.col('value'),0)), 'Boleto' ],
            [ sequelize.fn('SUM', sequelize.fn('IF',sequelize.literal('`type` = 3'), sequelize.col('value'),0)), 'Financiamento' ],
            [ sequelize.fn('SUM', sequelize.fn('IF',sequelize.literal('`type` = 4'), sequelize.col('value'),0)), 'Crédito' ],
            [ sequelize.fn('SUM', sequelize.fn('IF',sequelize.literal('`type` = 5'), sequelize.col('value'),0)), 'Recebimento Empréstimo' ],
            [ sequelize.fn('SUM', sequelize.fn('IF',sequelize.literal('`type` = 6'), sequelize.col('value'),0)), 'Vendas' ],
            [ sequelize.fn('SUM', sequelize.fn('IF',sequelize.literal('`type` = 7'), sequelize.col('value'),0)), 'Recebimento TED' ],
            [ sequelize.fn('SUM', sequelize.fn('IF',sequelize.literal('`type` = 8'), sequelize.col('value'),0)), 'Recebimento DOC' ],
            [ sequelize.fn('SUM', sequelize.fn('IF',sequelize.literal('`type` = 9'), sequelize.col('value'),0)), 'Aluguel' ]
        ],
        group:['shop_owner']
    });
}

module.exports = {
    getValueByType
}
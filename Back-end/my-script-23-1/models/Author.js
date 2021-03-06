const connection = require('./connection');

const serialize = (authorData) => ({
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
})

const getAll = async () => {
    const [authors] = await connection.execute(
        'SELETC id, first_name, middle_name, last_name FROM model_example.authors;',
    );
    return authors.map(serialize);
};

module.exports = {
    getAll,
};
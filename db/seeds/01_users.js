exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('user').del()
        .then(function() {
            // Inserts seed entries
            return knex('user').insert([
                { name: 'Clarance', email: 'clarance@emil.com', password: "claranceI$myp@$$w0rd" },
                { name: 'Marie', email: 'marie@email.com', password: "marieI$myp@$$w0rd" },
                { name: 'Shirley', email: 'marie@email.com', password: "shirleyI$myp@$$w0rd" }
            ]);
        });
};
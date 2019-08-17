'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('tasks', [
            { id: 1, description: 'Hacer proyecto politico', createdAt: new Date(), updatedAt: new Date() },
            { id: 2, description: 'Hacer tareas de Comfandi', createdAt: new Date(), updatedAt: new Date() },
            { id: 3, description: 'Hacer estructuras de algoritmo', createdAt: new Date(), updatedAt: new Date() },
            { id: 4, description: 'Hacer propuestas de diseno', createdAt: new Date(), updatedAt: new Date() },
            { id: 5, description: 'Hacer entregas de proyectos', createdAt: new Date(), updatedAt: new Date() }
        ], {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Task', null, {});
    }
};
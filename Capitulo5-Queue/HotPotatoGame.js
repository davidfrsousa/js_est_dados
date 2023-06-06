import Queue from './Queue.js';

function hotPotato(elementsList, num){
    const queue = new Queue();
    const eliminatedList = [];

    for(let i = 0; i < elementsList.length; i++){
        queue.enqueue(elementsList[i]);
    }
    while(queue.size() > 1){
        for(let i = 0; i < num; i++){
            queue.enqueue(queue.dequeue());
        }
        eliminatedList.push(queue.dequeue());
    }
    return {
        eliminated: eliminatedList, winner: queue.dequeue()
    }
}

const names = ['David', 'Sheila', 'Vini', 'Victor', 'Solange'];
const result = (hotPotato(names, 3));

result.eliminated.forEach(name => {
    console.log(`${name} was eliminated from the Hot Potato Game.`);
});

console.log(`The winner is: ${result.winner}`);
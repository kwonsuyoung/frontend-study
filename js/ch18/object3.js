const human = {
    name: '홍길동',
    age: 10 * 5,
    full_name: function () {
        console.log(this.name, '입니다')
    },
    backpack: {
        space: {
            money: 10000,
            coin: {
                
            }
        }
    }
}
console.log(human.backpack.space.money);
console.log(human.age);

human.full_name();
obj1 = {
    get() {
        console.log(this);
        return 'obj1';
    }
}

console.log(obj1.get());


document.getElementsByTagName('body').addEventListener(function() {
    console.log(this);
});
function act(number, operation) {
	if(!operation) return number;
	return operation(number);
}

function zero(operation) {
    return act(0, operation);
}

function one(operation) {
    return act(1, operation);
}

function two(operation) {
    return act(2, operation);
}

function three(operation){
    return act(3, operation);
}

function four(operation){
    return act(4, operation);
}

function five(operation){
    return act(5, operation);
}

function six(operation){
    return act(6, operation);
}

function seven(operation){
    return act(7, operation);
}

function eight(operation){
    return act(8, operation);
}

function nine(operation){
    return act(9, operation);
}

function plus(x) {
    return function(y) {
        return x + y;
    }
}

function minus(x) {
    console.log(x);
    return function(y) {
        return y - x;
    }
}
function times(x) {
    return function(y) {
        return x * y;
    }
}

function dividedBy(x) {
    return function(y) {
        return x / y;
    }
}
//given a number "a" and an array that stands for another number "b"
//calculate the value of a with an exponent of b

//a=2
//b=[3]

//a=2
//b=[1,0] = 10;

function superPow(a, b){
	b = +b.join('');
	var i = 1;
	var multiplier = a;
	while(i < b){
		if(i*2 < b){
			a*=a;
			i*=2;
		} else {
			a= multiplier*a;
			i++;
		}
	}
	return a;
}
var text= 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
console.log(text);
var dinosaur = 'Triceratops';
var dinosaurUpperCase = dinosaur.toUpperCase();
var textChange = text.replace('Velociraptor', dinosaurUpperCase);
console.log('Half of the textChange is on the ' + textChange.length/2 + ' character.');
console.log(textChange.slice(0,72));
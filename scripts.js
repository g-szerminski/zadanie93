var text= 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
console.log(text);
var dinosaur = 'Triceratops';
var dinosaurUpperCase = dinosaur.toUpperCase();
console.log(dinosaurUpperCase);
var textChange = text.replace('Velociraptor', dinosaur);
console.log(textChange.slice(0,72));
console.log('Half of the textChange is on the ' + textChange.length/2 + ' character.');

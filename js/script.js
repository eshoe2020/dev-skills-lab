//IPO - Input Process Output

//section: Constants and Variables (state)
//1.set up a variable that represents your skills 
let skills;

// Cached Element References
// button -add skill
// ul tag, when render is called it will insert ul tag
// input 

const $button = $('button');
const $ul = $('ul');
const $input = $('input');

$button.on('click', handleAddSkill);
$ul.on('click', handleDelete);
// Event Listeners


// Functions
init();
function init() {
    skills = [];
    render();
}
function handleAddSkill(){
    //store the value from the input tag inside a local variable
    const skill = $input.val();
    //check to make sure we have skill data
    if(skill) { 
        // create the UI (user interface) for a skill
        const $skill = $(`<li><span>X</span>${skill}</li>`)
        // push the skill UI into the skills list
        skills.push($skill);
         // clear the input tag's vaule (set to null, or empty string)
        $input.val('');
        // call render() 
        render();  
    } else return;
}

function handleDelete(){
    alert('elements inside of ul tag clicked');
}

function render(){
    if(!skills.length) $ul.css('margin-bottom', '30px');
    else $ul.css('margin-bottom', '0px');

    $ul.html(skills);
}
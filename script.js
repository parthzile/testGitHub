//Event Bubbling
const $outterBubble= document.getElementById('outterBubble')

const $middleBubble = document.getElementById('middleBubble')

const $innerBubble = document.getElementById('innerBubble')

$outterBubble.addEventListener( 'click' , function(){
    console.log("I am the outter element!")
    console.log("------------------------")
})


$middleBubble.addEventListener( 'click' , function(){
    console.log("I am the middle element!")
})

$innerBubble.addEventListener( 'click' , function(){
    console.log("I am the inner element!")
})

//Event Capturing
const $outterCapture = document.getElementById('outterCapture')

const $middleCapture = document.getElementById('middleCapture')

const $innerCapture = document.getElementById('innerCapture')

$outterCapture.addEventListener('click', function(){
    console.log("I am the outter element!")
})

$middleCapture.addEventListener('click', function(){
    console.log("I am the middle element!")

},true)

$innerCapture.addEventListener('click', function(){
    console.log("I am the inner element!")
    console.log("------------------------")

},true)

//No Propagation
const $outterNoProp = document.getElementById('outterNoProp')

const $middleNoProp = document.getElementById('middleNoProp')

const $innerNoProp = document.getElementById('innerNoProp')

$outterNoProp.addEventListener('click', function(e){
    e.stopPropagation()

    console.log(e.target)
    console.log(e.currentTarget)

    console.log("I am the outter element!")
    console.log("------------------------")

})

$middleNoProp.addEventListener('click', function(e){
    e.stopPropagation()
    console.log(e.target)
    console.log(e.currentTarget)
    console.log("I am the middle element!")
    console.log("------------------------")
})

$innerNoProp.addEventListener('click', function(e){
    e.stopPropagation()

    console.log(e.target)
    console.log(e.currentTarget)
    console.log("I am the inner element!")
    console.log("------------------------")
})
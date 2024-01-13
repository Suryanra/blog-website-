console.log("hello sir")
const container=document.getElementById('container')
async function fetchdata(){
const response=await fetch('http://localhost:5000/tweet')
const results=await response.json();
results.forEach(result => {
      // console.log(result)
      const {writtenby,emailby,about,content,tag}=result;
      const innerHtmlnew=`<div class="card">
      <div class="about">${about}</div>
      <div class="content">${content}</div>
      <div class="postedby">
      <div>${writtenby}</div>
      <div><button><i class="fa-regular fa-thumbs-up"></i></button>
      <button><i class="fa-regular fa-thumbs-down"></i></button></div>
            </div>
</div>`
// console.log(innerHtmlnew)
// container.appendChild(innerHtmlnew);
container.innerHTML=container.innerHTML+innerHtmlnew;;
});
}
fetchdata()


const arr=[
      "Your thoughts have the power to inspire, so don't keep them locked away. Share them with the world and watch the magic unfold.",
      "In the garden of ideas, sharing is the sunlight that makes them bloom.",
      "Your perspective is unique and valuable. Share your thoughts, and let them contribute to the kaleidoscope of human understanding.",
      "The beauty of sharing thoughts lies in the possibility of planting a seed of inspiration in someone else's mind.",
      "A single thought shared has the potential to create ripples of positive change. Be the catalyst for those waves.",
      "Don't underestimate the impact of your words. Share your thoughts and be the spark that ignites someone else's passion.",
      "Silence may be golden, but your thoughts are priceless. Share them generously and enrich the world around you.",
      "Every thought you share is a gift to others, a piece of wisdom that has the power to uplift and empower.",
      "In a world hungry for inspiration, your thoughts are the nourishment that can feed the minds of many. Share generously.",
      "The more you share your thoughts, the more you contribute to the collective intelligence of humanity. Speak up and be heard.",
      "Thoughts are like seeds; they need to be sown to grow. Share yours, and let them blossom into ideas that can change the world.",
      "A closed mind is like a sealed treasure chest. Open up, share your thoughts, and let the treasures inside shine.",
      "Sharing your thoughts is not just an act of expression; it's a gift to those who might find solace, inspiration, or guidance in your words.",
      "The echo of your thoughts can resonate in the hearts of others. Speak with intention, and let your words create positive echoes.",
      "The world becomes richer when minds share their treasures. Contribute to the wealth of ideas around you by sharing your thoughts.",
      "Your thoughts are a unique melody in the symphony of human consciousness. Share your tune and let it harmonize with the world.",
      "A thought unspoken is a missed opportunity for connection. Share your thoughts, and bridge the gaps between minds.",
      "The strength of a community lies in the diversity of its thoughts. Contribute to the richness of your community by sharing your unique perspective.",
      "Words have the power to shape reality. Share your thoughts responsibly and be a co-author of a better world.",
      "The world is a canvas, and your thoughts are the colors that can paint a brighter tomorrow. Don't hold back—let your ideas shine."
    ];
const quote=document.getElementById('quote')
const randomNumber = Math.floor(Math.random() * 19) + 1;

quote.innerText=arr[randomNumber]

const judgementcreate=document.getElementById('judgement-create');
const showhideform=document.getElementById('showhideform');
showhideform.addEventListener('click',()=>{
      // console.log("hello ji ji")
      console.log(judgementcreate.style.visibility=="visible")
      if(judgementcreate.style.visibility=="visible"){
            judgementcreate.style.visibility="hidden";
      }
      else {
      judgementcreate.style.visibility="visible";
}
})

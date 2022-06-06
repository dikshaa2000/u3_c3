const url="https://masai-vouchers-api.herokuapp.com/api/vouchers"

fetch(url)
.then(function(res){
    return res.json();
})
.then(function(res){
   append(res);
 console.log(res);   
})
.catch(function(err){
   console.log(err) ;
})

// async function getData(){
//     try{
//         var url="https://masai-vouchers-api.herokuapp.com/api/vouchers"
//         const res=await fetch(url);
//         let data=await res.json();
//         console.log(data);
//     }
//     catch (err){
//         console.log(err);
//     }
//     }
   

function append(data){
    data.map(function(el){
        let box=document.createElement("div");

        let image=document.createElement("img");
        image.src=el.image;

        let name=document.createElement("p");
        name.innerText=el.name;

        let price=document.createElement("p");
        price.innerText=el.price;

        var btn=document.createElement("button")
        btn.innerText="BUY"
        btn.setAttribute("class", "buy_voucher")
    
        box.append(image,name,price,btn)
        document.getElementById("voucher_list").append(box);
    })
   
}
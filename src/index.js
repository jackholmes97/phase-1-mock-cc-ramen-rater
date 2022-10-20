// write your code here

    const ramenMenu = document.querySelector('#ramen-menu');

    const detailImage = document.querySelector(".detail-image");

    const detailName = document.querySelector('.name');

    const detailRestaurant = document.querySelector('.restaurant');

    const detailRating = document.querySelector('#rating-display');

    const detailComment = document.querySelector('#comment-display');

    let ramenForm = document.querySelector('#new-ramen');

    // let ramenArr = [];
    

    function getAllRamen() {
        fetch('http://localhost:3000/ramens')
            .then(response => response.json())
            .then(data => data.forEach(element => {
                buildMenu(element)}
            ))
      //  console.log(ramenArr)
      //  console.log(ramenArr)
        
        ramenForm.addEventListener('submit', (e) => {
            handleSubmit(e)
        })
    }
    // console.log(ramenArr[0])
    // detailName.textContent = ramenArr[0].name;
    // detailRestaurant.textContent = ramenArr[0].restaurant;
    // detailRating.textContent = ramenArr[0].rating;
    // detailImage.src = ramenArr[0].image;
    // detailComment.textContent = ramenArr[0].comment;

    function buildMenu(obj) {
        const foodItem = document.createElement('img');
        foodItem.setAttribute("src", obj.image)
        ramenMenu.append(foodItem)
        foodItem.addEventListener('click', () => {
            detailName.textContent = obj.name;
            detailRestaurant.textContent = obj.restaurant;
            detailRating.textContent = obj.rating;
            detailImage.src = obj.image;
            detailComment.textContent = obj.comment;
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        let ramenObj = {
            "name" : e.target.name.value,
            "restaurant" : e.target.restaurant.value,
            "image" : e.target.image.value,
            "rating" : e.target.rating.value,
            "comment" : e.target.newComment.value

        }
        console.log(ramenObj);

        fetch('http://localhost:3000/ramens', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(ramenObj),
        })
            .then(response => response.json())
            .then(newRamen => buildMenu(newRamen))
        
    }


getAllRamen();
document.addEventListener("DOMContentLoaded", function() {
    const postGrid = document.getElementById('post-grid');

    function createPostBox(post) {
        const postBox = document.createElement('div');
        postBox.classList.add('post-box');

        // Username
        const username = document.createElement('p');
        username.classList.add('username');
        username.textContent = post.username;
        postBox.appendChild(username);

        // Image or Video
        if (post.type === 'image') {
            const img = document.createElement('img');
            img.src = post.src;
            postBox.appendChild(img);
        } else if (post.type === 'video') {
            const video = document.createElement('video');
            video.autoplay = true;
            video.muted = true;
            video.loop = true;
            const source = document.createElement('source');
            source.src = post.src;
            source.type = 'video/mp4';
            video.appendChild(source);
            postBox.appendChild(video);
        }

        // Post Description
        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = post.description;
        postBox.appendChild(description);

        postGrid.appendChild(postBox);
    }

    // Example post data (10 posts)
    const posts = [
        { type: 'image', src: 'https://picsum.photos/300/400?random=1', username: 'user1', description: 'This is a beautiful day at the beach! #surfexpo' },
        { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', username: 'user2', description: 'Check out this amazing video! #surfexpo' },
        { type: 'image', src: 'https://picsum.photos/300/500?random=2', username: 'user3', description: 'Enjoying the waves at the beach #surfexpo' },
        { type: 'image', src: 'https://picsum.photos/300/450?random=3', username: 'user4', description: 'Surf’s up! #surfexpo' },
        { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4', username: 'user5', description: 'Catching the perfect wave! #surfexpo' },
        { type: 'image', src: 'https://picsum.photos/300/600?random=4', username: 'user6', description: 'What a day! #surfexpo' },
        { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', username: 'user7', description: 'Loving the surf! #surfexpo' },
        { type: 'image', src: 'https://picsum.photos/300/550?random=5', username: 'user8', description: 'Surfing like a pro #surfexpo' },
        { type: 'image', src: 'https://picsum.photos/300/700?random=6', username: 'user9', description: 'Sunny beach vibes #surfexpo' },
        { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', username: 'user10', description: 'Epic wave ride #surfexpo' },
        { type: 'image', src: 'https://picsum.photos/300/500?random=7', username: 'user11', description: 'Golden hour by the beach #surfexpo' },
        { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4', username: 'user12', description: 'Surfing adventures! #surfexpo' },
        { type: 'image', src: 'https://picsum.photos/300/650?random=8', username: 'user13', description: 'The waves are amazing today #surfexpo' },
        { type: 'image', src: 'https://picsum.photos/300/450?random=9', username: 'user14', description: 'Catching some sun #surfexpo' },
        { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', username: 'user15', description: 'Surfboard tricks #surfexpo' },
        { type: 'image', src: 'https://picsum.photos/300/600?random=10', username: 'user16', description: 'Perfect waves #surfexpo' },
        { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4', username: 'user17', description: 'A perfect day at the beach #surfexpo' },
        { type: 'image', src: 'https://picsum.photos/300/500?random=11', username: 'user18', description: 'Sunset surf #surfexpo' },
        { type: 'image', src: 'https://picsum.photos/300/550?random=12', username: 'user19', description: 'Riding the big wave #surfexpo' },
        { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', username: 'user20', description: 'The thrill of surfing #surfexpo' }
    ];

    posts.forEach(post => createPostBox(post));

    // Initialize Masonry
    const msnry = new Masonry(postGrid, {
        itemSelector: '.post-box',
        /* columnWidth: '.post-box', */ // Adjust based on item size
        gutter: 20,
        fitWidth: true,
        percentPosition: true
    });

    // Layout Masonry after images have loaded
    imagesLoaded(postGrid, function() {
        msnry.layout();
    });

// Normal Scrolling


    /* setInterval(function() {
        window.scrollBy(0, 1); 
    }, 10);  */
 

//Scroll Up and Down


/*     let scrollDirection = 1; // 1 for down, -1 for up

    setInterval(function() {
        window.scrollBy(0, scrollDirection); // Scroll by 1px in the current direction

        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
            scrollDirection = -1; // Change direction to up when reaching the bottom
        } else if (window.scrollY <= 0) {
            scrollDirection = 1; // Change direction to down when reaching the top
        }
    }, 10); 
  */

//Infinite Scrolling


    /* const scrollContainer = document.getElementById('scroll-container');

    // Create a clone of the content to scroll infinitely
    const clone = scrollContainer.cloneNode(true);
    document.body.appendChild(clone);

    setInterval(function() {
        window.scrollBy(0, 1); // Scroll down 1px every interval

        // Check if we've reached the end of the original content
        if (window.scrollY >= scrollContainer.scrollHeight) {
            window.scrollTo(0, 0); // Go back to the top of the page
        }
    }, 10); // Adjust speed here (lower value = faster scroll) */


// Function to show the video overlay
/* const videoOverlay = document.getElementById('video-overlay');
const brandVideo = document.getElementById('brand-video');

    let videoDuration = 10000; // Duration to show video in milliseconds
    let postDisplayDuration = 5000; // Duration to show posts before video in milliseconds

    function showVideo() {
        videoOverlay.style.display = 'flex'; // Show the video overlay
        brandVideo.play(); // Start playing the video

        // Hide the video after its duration
        setTimeout(hideVideo, videoDuration);
    }

    function hideVideo() {
        videoOverlay.style.display = 'none'; // Hide the video overlay
        postGrid.style.display = 'grid'; // Show the post grid again

        // Repeat the video display cycle
        setTimeout(showVideo, postDisplayDuration);
    }

    // Initial setup: hide post grid and show video after a delay
    setTimeout(() => {
        postGrid.style.display = 'none'; // Hide the post grid
        showVideo(); // Show the video
    }, postDisplayDuration);

    // When the video ends, hide video and show posts again
    brandVideo.addEventListener('ended', hideVideo); */

    /* const videoOverlay = document.getElementById('video-overlay');
    const brandVideo = document.getElementById('brand-video');

    const scrollContainer = document.getElementById('scroll-container');

    let scrollInterval;
    let isScrolling = true; // Flag to control scrolling
    let videoDuration = 10000; // Video display duration (in milliseconds)
    let postDisplayDuration = 5000; // Post grid display duration before showing video (in milliseconds)

    // Infinite Scrolling
    function startScrolling() {
        scrollInterval = setInterval(function() {
            if (isScrolling) {
                window.scrollBy(0, 1); // Scroll down 1px every interval

                // Check if we've reached the end of the content
                if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
                    window.scrollTo(0, 0); // Loop back to the top
                }
            }
        }, 10); // Adjust speed here (lower value = faster scroll)
    }

    function stopScrolling() {
        isScrolling = false; // Pause scrolling
    }

    function resumeScrolling() {
        isScrolling = true; // Resume scrolling
    }

    function showVideo() {
        stopScrolling(); // Stop scrolling when the video starts
        videoOverlay.style.display = 'flex'; // Show the video overlay
        brandVideo.play(); // Start playing the video

        // Hide the video after its duration
        setTimeout(hideVideo, videoDuration);
    }

    function hideVideo() {
        videoOverlay.style.display = 'none'; // Hide the video overlay
        postGrid.style.display = 'grid'; // Ensure the post grid is visible again

        resumeScrolling(); // Resume scrolling after hiding the video

        // Repeat the video display cycle
        setTimeout(showVideo, postDisplayDuration);
    }

    // Initial setup: hide post grid and show video after a delay
    setTimeout(() => {
        postGrid.style.display = 'none'; // Hide the post grid
        showVideo(); // Show the video
    }, postDisplayDuration);

    // When the video ends, hide video and show posts again
    brandVideo.addEventListener('ended', hideVideo);

    // Start the infinite scrolling
    startScrolling(); */

    


 


});






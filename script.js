// Define service information
const services = {
    'pests-control': {
        description: 'Our Pests Control service offers eco-friendly solutions to keep your garden healthy and pest-free.',
        image: 'pest control.jpg'
    },
    'plant-care': {
        description: 'Our Plant Care service provides tips and techniques for maintaining your plants and ensuring they thrive.',
        image: 'plant care.jpg'
    },
    'designs-of-plants': {
        description: 'Get expert advice on designing plant layouts that suit your space and aesthetic preferences.',
        image: 'design of plants.jpg'
    },
    'compost-strategies': {
        description: 'Learn how to create compost that nourishes your garden using sustainable methods.',
        image: 'compost strategies.jpg'
    },
    'plant-ideas': {
        description: 'Discover creative plant ideas to beautify your urban space, whether indoors or outdoors.',
        image: 'plant ideas.jpg'
    },
    'irrigation-strategies': {
        description: 'Our Irrigation Strategies service provides smart solutions for watering your garden efficiently.',
        image: 'irrigation strategies.jpg'
    }
};

// Get all service cards and add click event listeners
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('click', function() {
        const service = card.getAttribute('data-service'); // Get the service type
        const serviceInfo = services[service]; // Get the corresponding service info

        // Update the service info section
        const serviceDescription = document.getElementById('service-description');
        const serviceImage = document.getElementById('service-image');
        
        serviceDescription.textContent = serviceInfo.description; // Set the description
        serviceImage.src = serviceInfo.image; // Set the image source
        serviceImage.style.display = 'block'; // Show the image
    });
});

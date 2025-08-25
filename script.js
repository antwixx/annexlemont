// Navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Template functionality
function copyTemplate() {
    const templateContent = document.getElementById('templateContent');
    if (templateContent) {
        const text = templateContent.innerText;
        navigator.clipboard.writeText(text).then(() => {
            // Show success message
            const button = event.target;
            const originalText = button.textContent;
            button.textContent = 'Copied!';
            button.style.backgroundColor = '#10b981';
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            const button = event.target;
            const originalText = button.textContent;
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.textContent = originalText;
            }, 2000);
        });
    }
}

// Template modal functionality for templates page
const templates = {
    'village-board-email': {
        title: 'Village Board Email Template',
        content: `Subject: Opposition to Commercial Rezoning on Lemont Road

Dear Village Board Members,

I am writing as a concerned resident of [Your Address] to express my strong opposition to any potential commercial rezoning of residential properties on Lemont Road for truck stop development.

The recent annexation of four unincorporated properties on August 11th, 2025, has brought these properties under Lemont's jurisdiction. I urge you to maintain their residential zoning and reject any requests for commercial rezoning.

Key concerns include:
• Increased traffic congestion and safety risks from heavy truck traffic
• Negative impact on residential property values
• Air and noise pollution affecting our community's health
• Disruption of the peaceful, residential character of our neighborhood

I trust that you will prioritize the interests of existing residents and maintain the residential integrity of our community.

Thank you for your consideration.

Sincerely,
[Your Name]
[Your Address]
[Your Phone Number]
[Your Email]`
    },
    'mayor-email': {
        title: 'Mayor\'s Office Email Template',
        content: `Subject: Resident Concerns About Potential Truck Stop Development

Dear Mayor [Mayor's Name],

As a longtime resident of Lemont, I am writing to express my serious concerns about the potential development of a truck stop on recently annexed properties on Lemont Road.

While I understand the village's need for economic development, I believe this particular use would be detrimental to our residential community for the following reasons:

• Traffic Impact: 24/7 heavy truck traffic would fundamentally change the character of our neighborhood
• Safety Concerns: Large commercial vehicles on residential streets pose risks to families and children
• Environmental Impact: Diesel emissions and noise pollution would negatively affect air quality and livability
• Property Values: Commercial intrusion into residential areas typically decreases property values

I respectfully urge you to consider the concerns of residents and work to maintain the residential zoning of these properties.

I would welcome the opportunity to discuss this matter further at your convenience.

Respectfully,
[Your Name]
[Your Address]
[Your Contact Information]`
    },
    'opposition-letter': {
        title: 'Formal Opposition Letter',
        content: `[Date]

Village of Lemont
Planning and Zoning Department
16 W 150 127th St
Lemont, IL 60439

RE: Opposition to Commercial Rezoning - Lemont Road Properties

Dear Planning and Zoning Commission,

I am writing to formally register my opposition to any proposed commercial rezoning of the recently annexed residential properties on Lemont Road for the purpose of truck stop development.

As a resident of [Your Address], I am deeply concerned about the potential impacts this development would have on our community:

TRAFFIC AND SAFETY CONCERNS:
The introduction of continuous heavy truck traffic through our residential area would create significant safety hazards, particularly for families with children. Our streets were not designed to accommodate large commercial vehicles operating 24 hours a day.

ENVIRONMENTAL IMPACT:
A truck stop facility would generate substantial air pollution through diesel emissions, noise pollution from air brakes and idling engines, and potential groundwater contamination from fuel storage and handling.

COMMUNITY CHARACTER:
Our neighborhood has maintained its residential character for decades. The intrusion of commercial truck stop operations would fundamentally alter the peaceful, family-oriented environment that residents have invested in and depend upon.

PROPERTY VALUES:
Studies consistently show that commercial truck stops in residential areas negatively impact nearby property values, representing a significant financial burden for existing homeowners.

PRECEDENT CONCERNS:
Allowing this type of commercial development sets a dangerous precedent for future residential-to-commercial conversions that could fundamentally change the character of our community.

I urge the Planning and Zoning Commission to reject any commercial rezoning applications for these properties and to maintain their residential designation in accordance with the existing neighborhood character and the interests of current residents.

Thank you for your careful consideration of these concerns. I am available to provide additional information or testimony as needed.

Sincerely,

[Your Name]
[Your Address]
[Your Phone Number]
[Your Email]`
    },
    'public-comment': {
        title: 'Public Comment Speaking Points',
        content: `Public Comment Speaking Points (2-3 minutes)

Good evening. My name is [Your Name], and I'm a resident of [Your Address/Neighborhood].

I'm here tonight to speak against any commercial rezoning that would allow truck stop development on the recently annexed Lemont Road properties.

Three key points:

FIRST - SAFETY: Our residential streets cannot safely handle 24/7 heavy truck traffic. We have families, children, and elderly residents who deserve safe neighborhoods.

SECOND - ENVIRONMENT: Truck stops bring diesel emissions, noise pollution, and potential contamination risks. These properties border our residential community, not an industrial zone.

THIRD - COMMUNITY INVESTMENT: Residents have invested their life savings in homes here, trusting that residential zoning protections would be maintained. Commercial truck stops destroy property values and neighborhood character.

The August 11th annexation brought these properties under Lemont's protection. I urge you to use that authority to PROTECT residential neighborhoods, not expose them to commercial truck traffic.

We're not anti-development - we're pro-APPROPRIATE development. Truck stops belong in commercial or industrial zones, not in residential neighborhoods.

I ask for your commitment tonight to reject any commercial rezoning applications for these properties.

Thank you.

[Notes for delivery:
- Speak slowly and clearly
- Make eye contact with board members
- Stay within time limit
- Thank them for their service]`
    },
    'facebook-post': {
        title: 'Facebook Post Template',
        content: `🚨 URGENT: Help Protect Our Neighborhood! 🚨

Fellow Lemont residents - we need your help! There's a proposed truck stop development that could bring 24/7 heavy truck traffic through our residential area on Lemont Road.

The Village recently annexed four properties in our neighborhood, and now there's potential for these to be rezoned from residential to commercial for truck stop development.

This would mean:
🚛 Hundreds of trucks daily through residential streets
🏠 Decreased property values for all of us
🌿 Air and noise pollution affecting our families
⚠️ Safety concerns with heavy traffic near schools and homes

WHAT YOU CAN DO:
✅ Sign the petitions (link in comments)
✅ Contact village board members
✅ Attend the next village meeting
✅ Share this post to spread awareness

Our community's voice is powerful when we stand together! Every signature and every contact makes a difference.

Tag your neighbors and share this post. Let's protect the residential character of our neighborhood! 

#LemontIL #CommunityAction #ProtectOurNeighborhood #ResidentialZoning

[Add petition link and meeting information in comments]`
    },
    'nextdoor-post': {
        title: 'Nextdoor Community Message',
        content: `Important Update for Our Neighborhood - Truck Stop Development Concerns

Hi neighbors,

I wanted to share some important information about a development that could significantly impact our area.

The Village of Lemont recently annexed four unincorporated properties on Lemont Road (in our Pleasantdale neighborhood area). There's now potential for these properties to be rezoned from residential to commercial for truck stop development.

As many of you know, this would bring:
• 24/7 heavy truck traffic through our residential streets
• Noise and air pollution concerns
• Potential impact on our property values
• Safety concerns for our families and children

COMMUNITY ACTION NEEDED:
• We're organizing to oppose any commercial rezoning
• Petitions are available to sign (I can share details)
• Village board meetings where we can voice concerns
• Template letters available for contacting officials

This affects all of us who've invested in this neighborhood. Whether you're concerned about safety, property values, or just maintaining the peaceful character of our area, your voice matters.

Would love to connect with neighbors who want to stay informed or help with community coordination efforts.

Please feel free to reach out if you have questions or want to get involved. Together, we can make sure our concerns are heard!

- [Your Name]
[Your contact information]

P.S. - If you know neighbors who aren't on Nextdoor, please share this information with them too!`
    }
};

function showTemplate(templateId) {
    const template = templates[templateId];
    if (template) {
        const modal = document.getElementById('templateModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalTemplate = document.getElementById('modalTemplate');
        
        modalTitle.textContent = template.title;
        modalTemplate.textContent = template.content;
        modal.classList.add('active');
    }
}

function closeModal() {
    const modal = document.getElementById('templateModal');
    modal.classList.remove('active');
}

function copyModalTemplate() {
    const modalTemplate = document.getElementById('modalTemplate');
    const text = modalTemplate.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.backgroundColor = '#10b981';
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    });
}

function copyTemplate(templateId) {
    const template = templates[templateId];
    if (template) {
        navigator.clipboard.writeText(template.content).then(() => {
            const button = event.target;
            const originalText = button.textContent;
            button.textContent = 'Copied!';
            button.style.backgroundColor = '#10b981';
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }
}

function downloadTemplate(templateId) {
    // This would typically trigger a PDF download
    // For now, we'll just show the template
    showTemplate(templateId);
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('templateModal');
    if (modal && e.target === modal) {
        closeModal();
    }
});

// Close modal with escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add animation classes when elements come into view
function observeElements() {
    const elements = document.querySelectorAll('.animate-fade-in');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        },
        { threshold: 0.1 }
    );

    elements.forEach(element => {
        element.style.animationPlayState = 'paused';
        observer.observe(element);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', observeElements);
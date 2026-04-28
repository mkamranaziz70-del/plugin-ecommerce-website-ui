// SPA Navigation
function switchView(viewId) {
    // Hide all views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });

    // Show target view
    const targetView = document.getElementById(viewId + '-view');
    if (targetView) {
        targetView.classList.add('active');
    }

    // Reset scroll
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Re-initialize Lucide icons for any newly visible content
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Admin Tab Switching
function switchAdminTab(tabId) {
    // Hide all tabs by removing active class
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all nav items
    document.querySelectorAll('.admin-nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Show selected tab
    const targetTab = document.getElementById('admin-' + tabId + '-tab');
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    // Set active class on clicked item
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active');
    }

    // Refresh icons
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Cart State
let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartUI();
    
    // Feedback toast (simulated)
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed; bottom: 100px; right: 30px; 
        background: #FF4081; color: white; padding: 15px 30px; 
        border-radius: 50px; font-weight: 800; z-index: 10000;
        box-shadow: 0 10px 30px rgba(255, 64, 129, 0.3);
        animation: slideIn 0.3s ease;
    `;
    toast.innerText = `✨ Added ${name} to cart!`;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 2500);
}

function updateCartUI() {
    const badge = document.getElementById('cart-badge');
    if (badge) badge.innerText = cart.length;
}

// Wireframe Toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-wireframe');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('wireframe-mode');
            toggleBtn.innerText = document.body.classList.contains('wireframe-mode') 
                ? 'High Fidelity Mode' 
                : 'Switch to Wireframe';
        });
    }
    
    // Initial icons
    if (window.lucide) {
        lucide.createIcons();
    }
});

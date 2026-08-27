/**
 * NEXORA — Clean & Lightweight Platform Script
 * Handles navigation drawer, direct phone/WhatsApp actions, and contact form.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileDrawer();
  initContactActions();
  initContactForm();
});

/* 1. Header & Navigation */
function initNavbar() {
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* 2. Mobile Drawer */
function initMobileDrawer() {
  const menuBtn = document.getElementById('menuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const closeBtn = document.getElementById('drawerClose');
  const drawerLinks = document.querySelectorAll('.drawer-menu a');

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* 3. Direct Contact Actions (WhatsApp & Copy Phone) */
function initContactActions() {
  // WhatsApp Buttons
  const waButtons = document.querySelectorAll('.action-wa');
  waButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const phone = btn.dataset.phone.replace(/\s+/g, '');
      const waNumber = phone.startsWith('0') ? '254' + phone.substring(1) : phone;
      const owner = btn.dataset.owner || 'Nexora';
      const text = encodeURIComponent(`Hi ${owner}! I saw your portfolio website and would like to discuss a project.`);
      window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');
    });
  });

  // Copy Phone Number
  const copyButtons = document.querySelectorAll('.action-copy');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const phone = btn.dataset.phone;
      const owner = btn.dataset.owner || 'Founder';
      if (phone) {
        navigator.clipboard.writeText(phone).then(() => {
          showToast(`Copied ${owner}'s phone number (${phone}) to clipboard! 📋`);
        }).catch(() => {
          showToast(`Phone number: ${phone}`);
        });
      }
    });
  });
}

/* 4. Client Project Inquiry Form */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('nameInput').value.trim();
    const contact = document.getElementById('contactInput').value.trim();
    const service = document.getElementById('serviceSelect').value;
    const message = document.getElementById('messageInput').value.trim();
    const submitBtn = form.querySelector('button[type="submit"]');

    if (!name || !contact || !message) {
      showToast('Please fill in your name, contact, and project details.', 'error');
      return;
    }

    // Friendly feedback
    submitBtn.disabled = true;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Sending message...</span>';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();
      showToast('🎉 Thank you! Your message has been sent. Joshua & Maurice will get back to you shortly.');
    }, 700);
  });
}

/* Simple Toast Alert Helper */
function showToast(message, type = 'success') {
  let existing = document.querySelector('.toast-box');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-box';
  if (type === 'error') {
    toast.style.background = '#dc2626';
  }
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

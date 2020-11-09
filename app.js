import './assets/js/common.js';

$(function() {
  const minScrollDuration = 1000;
  let skillsHTML = "";
  let workHTML = "";
  let projectsHTML = "";

  const skillGroups = [{
    name: 'Languages',
    skills: [{
      name: 'JavaScript / HTML / CSS',
      level: '90'
    }, {
      name: 'Java / C / C# / C++',
      level: '80'
    }, {
      name: 'PHP / Assembly',
      level: '65'
    }]
  }, {
    name: 'Frameworks & Libraries',
    skills: [{
      name: 'Angular / jQuery / Karma / Jasmine',
      level: '95'
    }, {
      name: 'React / NodeJS / Cucumber / Unity',
      level: '80'
    }, {
      name: '.NET MVC / WebAPI / CodeIgniter',
      level: '70'
    }]
  }, {
    name: 'Database',
    skills: [{
      name: 'SQL Server / MySQL / PostgreSQL',
      level: '85'
    }, {
      name: 'MongoDB',
      level: '65'
    }, {
      name: 'Stored procedures',
      level: '45'
    }]
  }, {
    name: 'Web Servers & Tools',
    skills: [{
      name: 'Git / Postman / MS Office',
      level: '95'
    }, {
      name: 'Apache / Nginx / IIS',
      level: '80'
    }, {
      name: 'VirtualBox',
      level: '50'
    }]
  }];

  const works = [{
    timeline: '2019 - NOW',
    role: 'DEVELOPMENT LEAD',
    isCompany: true,
    name: 'PEOPLE10 TECHNOSOFT PVT. LTD.',
    link: 'https://www.people10.com/',
    client: 'ALLEGIANT AIRLINES',
    clientLink: 'https://www.allegiantair.com/',
    description: `• Design and maintenance of Allegiant Air's Flight Movement Management (FMM), an Angular web app crucial to the Operational Control Centre (OCC) in order to track, maintain and modify flights.<br />
    • Large-scale project with over 90% unit test coverage and secured using Fortify.<br />
    • Improved UI performance by ~120% by implementing server-side rendering, lazy loading of front end modules, and virtual scrolling.<br />
    • Implemented an innovative solution to reduce the build time by ~650% by significantly improving unit test performance.`
  }, {
    timeline: '2018 - 2019',
    role: 'SENIOR SOFTWARE ENG.',
    isCompany: true,
    name: 'PEOPLE10 TECHNOSOFT PVT. LTD.',
    link: 'https://www.people10.com/',
    client: 'CHAPEL OF THE FLOWERS',
    clientLink: 'https://www.littlechapel.com/',
    description: `• Migrated a closed user group hotel booking website for wedding guests from .NET WebAPI, CodeIgniter, and jQuery to .NET WebAPI 2.0 and Angular 8 within 3 months which was earlier than estimated.<br />
    • Implemented split payment functionality which enables the splitting of large transactions between multiple cards.<br />
    • Implemented scheduled payments (EMI) and saved card functionality in compliance with PCI standards.`
  }, {
    timeline: '2016 - 2018',
    role: 'SOFTWARE ENG.',
    isCompany: true,
    name: 'PEOPLE10 TECHNOSOFT PVT. LTD.',
    link: 'https://www.people10.com/',
    client: 'PNW BOCES',
    clientLink: 'https://www.pnwboces.org/',
    description: `• Maintained the 11 Chapel of the Flowers' domains. Worked with various technologies such as AngularJS, Angular 2+, .NET MVC, .NET WebAPI, PHP and MySQL.<br />
    • Designed and developed OLAS (olasjobs.org), an online job application system for educators using AngularJS and .NET WebAPI.`
  }, {
    timeline: '2012 - 2016',
    role: 'ELECTRICAL & ELECTRONICS ENG.',
    isCompany: false,
    name: 'NATIONAL INSTITUTE OF TECHNOLOGY, CALICUT',
    link: 'http://www.nitc.ac.in/',
    description: `• Senior executive of the media committee for Tathva and Ragam which are the technical and cultural fests respectively held at National Institute of Technology, Calicut.<br />
    • Player in the college football and table tennis team.`
  }];

  const projects = [{
    company: 'allegiant',
    bgClass: 'allegiant-bg',
    link: 'https://www.allegiantair.com/',
    logo: 'assets/img/allegiant-logo.svg',
    isLogoRight: true,
    title: 'Flight Movement Management',
    subtitle: 'Allegiant Airlines',
    tags: 'Angular / RxJS / Html / Css / Karma / Jasmine / Cucumber',
    description: 'Flight Movement Management(FMM) is a web app crucial to the Operational Control Centre (OCC) in order to track, maintain, and modify flights.'
  }, {
    company: 'chapel',
    bgClass: 'chapel-bg',
    link: 'https://www.littlechapel.com/',
    logo: 'assets/img/cof-logo.png',
    isLogoRight: true,
    title: 'Little Chapel',
    subtitle: 'Chapel of the Flowers',
    tags: 'AngularJS / .NET MVC / SQL / Html / Css / IIS',
    description: 'Little Chapel is an E-commerce website for wedding bookings. Chapel of the Flowers features three unique chapels on its Las Vegas Strip grounds. Their three on-site chapel options include a traditional Victorian Chapel, the Tuscan-inspired La Capella Chapel, and the chic, modern Magnolia Chapel.'
  }, {
    company: 'tropicana',
    bgClass: 'trop-bg',
    link: 'https://www.tropicanalvweddings.com/',
    logo: 'assets/img/trop-logo.svg',
    isLogoRight: true,
    title: 'Tropicana LV Weddings',
    subtitle: 'Chapel of the Flowers',
    tags: 'AngularJS / GulpJS / .NET WebAPI / SQL / Html / Css',
    description: 'Tropicana LV Weddings is an E-commerce website for wedding bookings, which offers several unique indoor and outdoor chapels at this famous Las Vegas resort.'
  }, {
    company: 'pnw',
    bgClass: 'olas-bg',
    link: 'https://www.olasjobs.org/',
    logo: 'assets/img/pnw-logo.png',
    isLogoRight: false,
    title: 'Online Job Application System',
    subtitle: 'PNW BOCES',
    tags: 'AngularJS / GulpJS / .NET WebAPI / SQL / Html / Css',
    description: 'The Online Application System for K-12 Education (OLAS) is a cloud-based job application system serving schools & districts throughout New York State and surrounding areas.'
  }, {
    company: 'nitc',
    bgClass: 'vending-machine-bg',
    link: 'http://www.nitc.ac.in/',
    logo: 'assets/img/nitc-logo.png',
    isLogoRight: false,
    title: 'RFID Vending Machine',
    subtitle: 'Major Project | National Institute of Technology, Calicut',
    tags: 'Electrical / Electronics / Mechanical / Arduino / C++',
    description: 'Created a working prototype of an RFID vending machine that would allow students to buy items using their ID cards. Developed an understanding of secure authentication using an RFID reader. The software was developed in C++ on an Arduino board.'
  }, {
    company: 'nitc',
    bgClass: 'phone-jammer-bg',
    link: 'http://www.nitc.ac.in/',
    logo: 'assets/img/nitc-logo.png',
    isLogoRight: false,
    title: 'Mobile Phone Jammer',
    subtitle: 'Minor Project | National Institute of Technology, Calicut',
    tags: 'Electronics',
    description: 'Created a cost-effective mobile phone detector and jammer which could extend over an entire room intended to be used in examination halls.'
  },
  // {
  //   company: 'nitc',
  //   bgClass: 'assets/img/line-following-robot.jpg',
  //   link: 'http://www.nitc.ac.in/',
  //   logo: 'assets/img/nitc-logo.png',
  //   isLogoRight: false,
  //   title: 'Line Following Robot',
  //   subtitle: 'Robotics Interest Group | National Institute of Technology, Calicut',
  //   tags: 'Electrical / Electronics / Arduino / C',
  //   description: 'The Online Application System for K-12 Education (OLAS) is a cloud-based job application system serving schools & districts throughout New York State and surrounding areas.'
  // }
  ];

  // Scroll to the element provided
  const scrollTo = (elem) => {
    const duration = Math.abs(elem.offset().top - $(window).scrollTop()) * (1/2);
    elem.navigate(duration > minScrollDuration ? duration : minScrollDuration);
  };

  // Add smooth scrolling to # routes
  $('a[href^="#"]').each(function () {
    $(this).on('click', function (e) {
      $('#nav-icon').removeClass('open');
      $('header').removeClass('open');
      e.preventDefault();
      const id = $(this).attr('href');
      const elem = $(id);

      if (elem.length) {
        scrollTo(elem);
      }
    });
  });

  $('#nav-icon').on('click', function() {
    $(this).toggleClass('open');
    $('header').toggleClass('open');
  });

  // Scroll to top of the page
  function scrollToTop() {
    if ($(this).scrollTop() > 300) { 
      $('#scrollToTop').fadeIn(); 
    } else { 
      $('#scrollToTop').fadeOut(); 
    }
  }

  $(window).on('scroll', scrollToTop);

  // Set the active nav link in the header
  function setActiveNav() {
    $('section').each(function () {
      const cutoff = $(window).scrollTop() + 2 * $('header').height();
      if($(this).offset().top <= cutoff && $(this).offset().top + $(this).height() > cutoff) {
        const activeId = $(this).attr('id')
        $('#nav-links').find('a').each(function() {
          $(this).toggleClass('active', $(this).attr('id').replace('nav-', '') === activeId);
        });
      }
    });
  }

  $(window).on('scroll', setActiveNav);

  // Trigger scroll animatons
  function scrollAnimations() {
    // Calc current offset and get all animatables
    const bottomOffset = $(window).scrollTop() + $(window).height();
    const animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if (animatables.length === 0) {
      $(window).off('scroll', scrollAnimations);
    }

    // Check all animatables and animate them if necessary
    animatables.each(function(i) {
      const animatable = $(this);
      if ((animatable.offset().top + animatable.height() - 20) < bottomOffset || (animatable.offset().top + 120) < bottomOffset) {
        animatable.removeClass('animatable').addClass('animated');
      }
    });
  }

  $(window).on('scroll', scrollAnimations);

  $.each(skillGroups, function(index, skillGroup) {
    let skills = "";

    $.each(skillGroup.skills, function(index, skill) {
      skills += `<p class="skill-names">
        ${skill.name}
      </p>
      <div class="skill-bar-container">
        <div style="width: ${skill.level}%;" class="skill-bar animatable expand"></div>
      </div>`
    })

    skillsHTML += `<div class="skill-group">
      <h3 class="group-heading">
        ${skillGroup.name}
      </h3>
      <div class="skill">
        ${skills}
      </div>
    </div>`;
  });

  $('#skills').html(skillsHTML);

  $.each(works, function(index, work) {
    workHTML += `<div class="timeline-item animatable fadeInUp" data-text="${work.timeline}">
      <div class="timeline-content">
        <h2 class="timeline-content-title">${work.role}</h2>
        ${work.isCompany ? `<h3 class="timeline-content-company">
          COMPANY -
          <a class="fancy-link" target="_blank" href="${work.link}">${work.name}</a>
        </h3>
        <h4 class="timeline-content-client">
          CLIENT -
          <a class="fancy-link" target="_blank" href="${work.clientLink}">${work.client}</a>
        </h4>` : `<h3 class="timeline-content-company">
          UNIVERSITY -
          <a class="fancy-link" target="_blank" href="${work.link}">${work.name}</a>
        </h3>`}
        <p class="timeline-content-desc">${work.description}</p>
      </div>
    </div>`;
  });

  $('#timeline').html(workHTML);

  $.each(projects, function(index, project) {
    projectsHTML += `<div class="col animatable fadeInUp">
      <a target="_blank" href="${project.link}">
        <div class="bg-img ${project.bgClass}"></div>
        <div class="project-info">
          <div class="logo ${project.isLogoRight ? 'text-right' : ''} ${project.company}-logo">
            <img src="${project.logo}" />
          </div>
          <h2 class="project-title">
            ${project.title}
          </h2>
          <span class="project-subtitle">
            ${project.subtitle}
          </span>
          <p class="tags">
            <i class="fa fa-tag"></i>
            ${project.tags}
          </p>
          <span class="desc">
            ${project.description}
          </span>
        </div>
      </a>
    </div>`
  });
  
  $('#project-list').html(projectsHTML);

  // Run of page load to trigger preloader
  $(window).on('load', function() {
    $('.brand-container').addClass('loaded')
    $('.preloader').addClass('loaded')
    setTimeout(() => {
      $('body').addClass('loaded')
    }, 900)
  });

  // Trigger scroll initially in case user is not at the top of the page
  $(window).trigger('scroll');

});
// Video 44

tippy("#tooltip-t", {
  content: "On superior",
});
tippy("#tooltip-b", {
  content: "On Bottom",
  placement: "bottom",
});
tippy("#tooltip-r", {
  content: "On Right",
  placement: "right",
});
tippy("#tooltip-l", {
  content: "On Left",
  placement: "left",
});
tippy("#tooltip-t-html", {
  allowHTML: true,
  content:
    "<span class='text-red-500 font-semibold'>Tooltip</span> <span class='italic text-green-500'>with</span> <span class='underline text-blue-500'>Tailwind</span>",
});

// Video 45 Popover

tippy("#popover-t", {
  theme: "light-border",
  content: "Popover Top",
  trigger: "click",
  hideOnClick: "toggle",
  interactive: true,
});
tippy("#popover-r", {
  theme: "light-border",
  content: "Popover Right",
  trigger: "click",
  hideOnClick: "toggle",
  interactive: true,
  placement: "right",
});
tippy("#popover-l", {
  theme: "light-border",
  content: "Popover Left",
  trigger: "click",
  hideOnClick: "toggle",
  interactive: true,
  placement: "left",
});
tippy("#popover-b", {
  theme: "light-border",
  content: "Popover Bottom",
  trigger: "click",
  hideOnClick: "toggle",
  interactive: true,
  placement: "bottom",
});

// Video 46 dropdown
const dropdownContent = document.getElementById("dropdown-content");
tippy("#dropdown-b", {
  theme: "light-border",
  content: dropdownContent.innerHTML,
  allowHTML: true,
  trigger: "click",
  hideOnClick: true,
  interactive: true,
  placement: "bottom",
  arrow: false,
  onCreate(instace) {
    instace._closeTippy = function (e) {
      instace.hide();
    };
  },
  onMount(instance) {
    const openDropdown = document.getElementById("open-dropdown");
    openDropdown.classList.add("hidden");

    const closeDropdown = document.getElementById("close-dropdown");
    closeDropdown.classList.remove("hidden");

    const lista = document.getElementById("lista-close");
    lista.addEventListener("click", instance._closeTippy);
  },
  onHide(instance) {
    const openDropdown = document.getElementById("open-dropdown");
    openDropdown.classList.remove("hidden");

    const lista = document.getElementById("lista-close");
    lista.removeEventListener("click", instance._closeTippy);

    const closeDropdown = document.getElementById("close-dropdown");
    closeDropdown.classList.add("hidden");
  },
});

// Herranientas necesarias para que funcione

/*

      <link
    rel="stylesheet"
    href="https://unpkg.com/tippy.js@6/themes/light-border.css"
  />


      <script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js"></script>
    <script src="https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js"></script>
    <script src="index.js"></script>
     */




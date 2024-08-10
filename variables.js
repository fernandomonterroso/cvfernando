var apiEndpoint = "module/ocupacional_prove/functions_ocupacional.php?FUNC=";
var Headers = {
  json: { header: "Content-Type", value: "application/json" },
  form: { header: "Content-Type", value: "application/x-www-form-urlencoded" },
};

var vm = new Vue({
  el: "#app",
  directives: {
    upper: {
      // directive definition
      update: function (el) {
        el.value = el.value.toUpperCase();
      },
    },
  },
  mounted: function () {},
  data: {
    resume: {
      personal: {
        name: "Fernando",
        surname: "Monterroso",
        image: "https://avatars.githubusercontent.com/u/49045198?v=4",
        email: "elmerfer_mejor@hotmail.com",
        address: "GUATEMALA",
        web: "webnodispo.com",
        telephone: "(+502) 4129XXXX",
        introduction: "PROGRAMADOR SR 😎",
        experience: "ss",
      },
    },
    socialLinks: [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/fernando-monterroso-717866169/",
      },
      { name: "github", url: "https://github.com/fernandomonterrosoo" },
      { name: "twitter", url: "https://twitter.com/tu-usuario" },
      { name: "facebook", url: "https://www.facebook.com/tu-usuario" },
    ],
    experiencia: [
      {
        company: "SAMSUNG | SLCTrade",
        startDate: "2024/06",
        endDate: "present",
        title: "Programador Senior",
        description:
          "Senior Programmer. develop and maintain high quality software applications for Central America and Caribbean countries.",
        ubicacion: "Guatemala",
        modalidad: "Híbrido",
      },
      {
        company: "COMBEX-IM | Depósito Aduanero Temporal",
        startDate: "2023/01",
        endDate: "2024/06",
        title: "Programador Senior",
        description:
          "Experto en soluciones de sistemas aduanales y administrativos.",
        ubicacion: "Guatemala",
        modalidad: "Híbrido",
      },
      {
        company: "COMBEX-IM | Depósito Aduanero Temporal",
        startDate: "2019/12",
        endDate: "2023/07",
        title: "Analista de Programación",
        tipo: "Jornada completa",
      },
      {
        company: "Express Aéreo Aeropuerto internacional La Aurora",
        startDate: "2019/08",
        endDate: "2019/12",
        title: "Practicante",
        description: "Practicante en departamento de informática, 400 horas.",
      },
      {
        company: "Autónomo",
        startDate: "2016/01",
        endDate: "present",
        title: "Programador Informático",
        aptitudes: ["Python"],
      },
      {
        company: "Fundación Kinal",
        startDate: "2019/01",
        endDate: "2019/12",
        title: "Programador Web",
        description:
          "Programador de páginas web (backend y frontend), con Angular y Node.js",
      },
      {
        company: "UBIQUO LABS",
        startDate: "2018/10",
        endDate: "2018/12",
        title: "Practicante",
        ubicacion: "Campus TEC",
        description: "Practicante en departamento de informática, 300 horas.",
      },
      {
        company: "ALTEC",
        startDate: "2017/10",
        endDate: "2017/12",
        title: "Practicante",
        ubicacion: "Zona 3, ciudad capital",
        description: "Práctica en el departamento de IT, 300 horas.",
      },
    ],
    educacion: [
      {
        institution: "Universidad Mariano Gálvez",
        title: "Ingeniería, Ingeniería Informática",
        startDate: "2020/01",
        endDate: "2025/12",
        introduction: "Descripción o detalles adicionales (si los hay)",
      },
      {
        institution: "KINAL",
        title: "Titulo o Programa Estudiado (si aplica)",
        startDate: "2017/01",
        endDate: "2019/12",
        introduction: "Descripción o detalles adicionales (si los hay)",
      },
    ],
    skills: {
      languages: [
        "python",
        "js",
        "java",
        "c#",
        "c++",
        "php",
        "typescript",
        "swift",
        "kotlin",
        "golang",
        "rust",
      ],
      frameworks: [
        "django",
        "react",
        "angular",
        "vuejs",
        "express",
        "laravel",
        "spring",
        "asp.net",
        "ember",
        "bootstrap",
        "tailwind",
        "ionic",
        "react native",
        "flutter",
        "cordova",
        "electron",
        "next.js",
        "nuxt.js",
      ],
    },
    template: {
      linkedin: "https://www.linkedin.com/in/fernando-monterroso-717866169/",
    },
  },
  computed: {
    skillKeys() {
      return Object.keys(this.skills);
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    detectMobileDevice() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      let message;

      if (/android/i.test(userAgent)) {
        message =
          "Accediste desde un dispositivo Android. Deberías considerar comprar un iPhone, ¡jeje! Visita mi <a href='https://bootstrap-shop-template.vercel.app/shopDinamic.html' target='_blank'>tienda presionando aquí</a> para comprar uno.";
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        message =
          "Accediste desde un dispositivo iOS, pero parece que no es el más reciente y poderoso. Visita mi <a href='https://bootstrap-shop-template.vercel.app/shopDinamic.html' target='_blank'>tienda presionando aquí</a> para comprar uno.";
      } else {
        message =
          "Accediste desde un dispositivo que no es ni Android ni iOS, a lo mejor es una PC, compra un iphone mejor. Visita mi tienda <a href='https://bootstrap-shop-template.vercel.app/shopDinamic.html' target='_blank'>tienda presionando aquí</a> para comprar uno.";
      }

      // Obtener todos los scripts en el documento
      var scripts = document.getElementsByTagName("script");
      var version = "1.0.0";
      // Iterar sobre los scripts para encontrar el que tiene 'variables.js'
      for (var i = 0; i < scripts.length; i++) {
        var src = scripts[i].getAttribute("src");
        if (src && src.includes("variables.js")) {
          // Extraer la parte después de '?v='
          version = src.split("?v=")[1];
        }
      }

      Swal.fire({
        title: "Ey ey ey mamallema",
        html: `${message}
            <hr/>
            <p><small>The content is licensed under a Creative Commons Attribution-ShareAlike ${version}</small></p>`,
        icon: "info",
        confirmButtonText: "Cerrar",
      });
    },
  },
  init() {},
  ready: function () {
    this.detectMobileDevice();
    document.getElementById("loadingBlock").style.display = "none";
    document.getElementById("sideNav").style.display = "flex";
    document.getElementById("elementos").style.display = "block";
  },
});

var apiEndpoint = 'module/ocupacional_prove/functions_ocupacional.php?FUNC=';
var Headers = {
    json: { header: 'Content-Type', value: 'application/json' },
    form: { header: 'Content-Type', value: 'application/x-www-form-urlencoded' }
};

var vm = new Vue({
    el: '#app',
    directives: {
        upper: {
            // directive definition
            update: function (el) {
                el.value = el.value.toUpperCase();
            }
        }
    },
    mounted: function () {

    },
    data: {
        resume: {
            personal: {
                name: 'Fernando',
                surname: 'Monterroso',
                image: 'https://avatars.githubusercontent.com/u/49045198?v=4',
                email: 'elmerfer_mejor@hotmail.com',
                address: 'GUATEMALA',
                web: 'webnodispo.com',
                telephone: "+502 4129XXXX",
                introduction: 'Programador Senior 😎',
                experience: 'ss'
            },
        }, socialLinks: [
            { name: 'linkedin', url: 'https://www.linkedin.com/in/fernando-monterroso-717866169/' },
            { name: 'github', url: 'https://github.com/fernandomonterrosoo' },
            { name: 'twitter', url: 'https://twitter.com/tu-usuario' },
            { name: 'facebook', url: 'https://www.facebook.com/tu-usuario' }
        ],
        experiencia: [
            {
                "company": "COMBEX-IM | Depósito Aduanero Temporal",
                "startDate": "2023/01",
                "endDate": "present",
                "title": "Programador Sénior",
                "description": "Analista de programación",
                "ubicacion": "Guatemala",
                "modalidad": "Híbrido"
            },
            {
                "company": "COMBEX-IM | Depósito Aduanero Temporal",
                "startDate": "2019/12",
                "endDate": "2023/07",
                "title": "Analista de Programación",
                "tipo": "Jornada completa"
            },
            {
                "company": "Express Aéreo Aeropuerto internacional La Aurora",
                "startDate": "2019/08",
                "endDate": "2019/12",
                "title": "Practicante",
                "description": "Practicante en departamento de informática, 400 horas."
            },
            {
                "company": "Autónomo",
                "startDate": "2016/01",
                "endDate": "present",
                "title": "Programador Informático",
                "aptitudes": ["Python"]
            },
            {
                "company": "Fundación Kinal",
                "startDate": "2019/01",
                "endDate": "2019/12",
                "title": "Programador Web",
                "description": "Programador de páginas web (backend y frontend), con Angular y Node.js"
            },
            {
                "company": "UBIQUO LABS",
                "startDate": "2018/10",
                "endDate": "2018/12",
                "title": "Practicante",
                "ubicacion": "Campus TEC",
                "description": "Practicante en departamento de informática, 300 horas."
            },
            {
                "company": "ALTEC",
                "startDate": "2017/10",
                "endDate": "2017/12",
                "title": "Practicante",
                "ubicacion": "Zona 3, ciudad capital",
                "description": "Práctica en el departamento de IT, 300 horas."
            }
        ], educacion: [
            {
                "institution": "Universidad Mariano Gálvez",
                "title": "Ingeniería, Ingeniería Informática",
                "startDate": "2020/01",
                "endDate": "2025/12",
                "introduction": "Descripción o detalles adicionales (si los hay)"
            },
            {
                "institution": "KINAL",
                "title": "Titulo o Programa Estudiado (si aplica)",
                "startDate": "2017/01",
                "endDate": "2019/12",
                "introduction": "Descripción o detalles adicionales (si los hay)"
            }
        ], "skills": {
            "languages": [
                "python",
                "javascript",
                "java",
                "csharp",
                "ruby",
                "php",
                "cpp",
                "typescript",
                "swift",
                "kotlin",
                "scala",
                "go",
                "rust"
            ],
            "frameworks": [
                "django",
                "react",
                // ... otros frameworks
            ]
        },
        template: {
            linkedin: "https://www.linkedin.com/in/fernando-monterroso-717866169/"
        }


    },
    computed: {
        skillKeys() {
            return Object.keys(this.skills);
        }
    }, methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        detectMobileDevice() {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;
            let message;

            if (/android/i.test(userAgent)) {
                message = "Accediste desde un dispositivo Android. Deberías considerar comprar un iPhone, ¡jeje! Visita mi tienda <a href='https://bootstrap-shop-template.vercel.app/shopDinamic.html' target='_blank'>tienda</a>.";
            } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                message = "Accediste desde un dispositivo iOS, pero parece que no es el más reciente y poderoso. Visita mi tienda <a href='https://bootstrap-shop-template.vercel.app/shopDinamic.html' target='_blank'>tienda</a>.";
            } else {
                message = "Accediste desde un dispositivo que no es ni Android ni iOS. Visita mi tienda <a href='https://bootstrap-shop-template.vercel.app/shopDinamic.html' target='_blank'>tienda</a>.";
            }

            Swal.fire({
                title: 'Ey ey ey mamallema',
                html: message,
                icon: 'info',
                confirmButtonText: 'Cerrar'
            });
        }

    }, init() {

    }, ready: function () {
        this.detectMobileDevice();

    }
});


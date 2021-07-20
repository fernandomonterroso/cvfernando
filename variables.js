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
	mounted: function(){

    },
	data:{
		resume: {
            personal : {
                name:'Fernando',
                surname: 'Monterroso',
                image: 'https://media-exp3.licdn.com/dms/image/C4D03AQEhlCGv759YBw/profile-displayphoto-shrink_200_200/0/1615478994464?e=1632355200&v=beta&t=KAgVuxdMsdh9ILA_GXyUzPkA735RCP-BrdukGFNHbig',
                email: 'elmerfer_mejor@hotmail.com',
                address: 'GUATEMALA',
                web : 'webnodispo.com',
                telephone: 41291570,
                introduction: 'soy programdor jr',
                experience : 'ss'
            }, 
        },
        experience:[
            {
            "title": "Programador",skills: "skills nose1",company:"-oculto-"
            },
            {
                "title": "IT",skills: "skills nose2",company:"-oculto2-"
            }
        ],
        template:{
            linkedin:"https://www.linkedin.com/in/fernando-monterroso-717866169/"
        }
          
          
	},
    methods: {
		
		
    }
});


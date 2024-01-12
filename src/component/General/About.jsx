import "../../assets/styles/about.css";	
import Background1 from "../../assets/images/Background1.jpg";
import { useContext } from 'react';
import { LanguageContext } from '../../App.jsx';
const About = () => {
    const language = useContext(LanguageContext);
  return (
    <>
		<div className="header d-flex flex-column align-items-center justify-content-start text-white">
			<h1 className="fw-bold mt-5">{language === 'English' ? "Welcome to": "សូមស្វាគមន៍ មកកាន់"}</h1>
			<h1 className="fw-bold">Komsanhub</h1>
		</div>

		<div className="row my-5 ">
			<div className="d-none d-md-inline col-md-6 text-center">
				<img className="rounded-3 object-fit-cover h-100 w-75" src={Background1} alt="angkor wat" />	
			</div>
			<div className="col-12 col-md-6 h-100 text-center d-flex flex-column justify-content-center align-items-center">
				<h3 className="align-items-center">
					{language === 'English' ? "About us": "អំពីពួកយើង"}
				</h3>
				<p className="w-75">
					{language === 'English' ? "We are KomsanHub Operator based in Phnom Penh, Cambodia. Local tour operator without intermediaries, look no further, we are your best option in tours of the Cambodia.": 
					"យើងជាប្រតិបត្តិករ KomsanHub ដែលមានមូលដ្ឋាននៅទីក្រុងភ្នំពេញ ប្រទេសកម្ពុជា។ ប្រតិបត្តិករទេសចរណ៍ក្នុងស្រុកដោយគ្មានអន្តរការី មើលមិនឃើញទៀតទេ យើងជាជម្រើសដ៏ល្អបំផុតរបស់អ្នកក្នុងដំណើរទេសចរណ៍កម្ពុជា។"}
				</p>
				<p className="w-75">
					{language === 'English' ? "Our tour company was created to provide you with places, venues, parks, museums, and historical sites, in the ": 
					"ក្រុមហ៊ុនទេសចរណ៍របស់យើងត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ឱ្យអ្នកនូវទីកន្លែង ទីកន្លែង ឧទ្យាន សារមន្ទីរ និងកន្លែងប្រវត្តិសាស្ត្រនៅក្នុង "}
					<a href="https://www.google.com/search?q=kingdom+of+cambodia&oq=kingdom+of+ca&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEAAYgAQyBggDEEUYOTIHCAQQABiABDINCAUQLhivARjHARiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDQ4NTBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" 
						className="fw-bold text-decoration-none text-black"
						target="_blank" rel="noopener noreferrer"
					>
						{language === 'English' ? "Kingdom of Cambodia.": "ព្រះរាជាណាចក្រកម្ពុជា។"}
					</a>
				</p>
			</div>
		</div>

		<div className="container">
			<div>
				<h2 className="text-center"> {language === 'English' ? "Why Choose Us?": "ហេតុអ្វីត្រូវជ្រើសរើសពួកយើង"} </h2>
				<h5 className="text-center"> {language === 'English' ? "Unforgettable Experiences Await You": "បទពិសោធន៍ដែលមិនអាចបំភ្លេចបានកំពុងរង់ចាំអ្នក។"} </h5>
				<p className="text-center">{language === 'English' ? "Welcome to KomsanHub, where every visit is not just a journey, it's a curated experience crafted to leave you with lasting memories. Here's why choosing us for your next adventure is the perfect decision:": 
          "សូមស្វាគមន៍មកកាន់ KomsanHub ជាកន្លែងដែលរាល់ការទស្សនាមិនមែនគ្រាន់តែជាការធ្វើដំណើរប៉ុណ្ណោះទេ វាគឺជាបទពិសោធន៍ដែលបានរៀបចំឡើងដើម្បីទុកឲ្យអ្នកនូវការចងចាំដ៏យូរអង្វែង។ នេះជាមូលហេតុដែលការជ្រើសរើសពួកយើងសម្រាប់ការផ្សងព្រេងបន្ទាប់របស់អ្នកគឺជាការសម្រេចចិត្តដ៏ល្អឥតខ្ចោះ៖"} </p>
			</div>
			<div className="row g-3">
				<div className="col-sm-6 mx-auto" style={{backgroundImage: "../../assets/images/Royal Palace.jpg"}}>
					<span> {language === 'English' ? "01": "០១"} </span>
					<h4> {language === 'English' ? "Discover the possibilities": "ស្វែងយល់ពីលទ្ធភាព"} </h4>
					<p> {language === 'English' ? "You will definitely have a good time in Cambodia because of all the sights to see.": "អ្នកពិតជានឹងមានពេលវេលាដ៏ល្អនៅក្នុងប្រទេសកម្ពុជា ដោយសារតែទេសភាពទាំងអស់ដែលត្រូវមើល។"} </p>
				</div>

				<div className="col-sm-6 mx-auto">
					<span> {language === 'English' ? "02": "០២"} </span>
					<h4> {language === 'English' ? "The Best Guides": "មគ្គុទ្ទេសល្អបំផុត"} </h4>
					<p> {language === 'English' ? "Guides specialized in archeology, ornithology, culture and adventure with disposition at all times with motivation and confidence.": 
					"មគ្គុទ្ទេសក៍ដែលមានឯកទេសខាងបុរាណវិទ្យា រចនាបថ វប្បធម៌ និងការផ្សងព្រេងជាមួយការតាំងចិត្តគ្រប់ពេលវេលាជាមួយនឹងការលើកទឹកចិត្ត និងទំនុកចិត្ត។"} </p>
				</div>

				<div className="col-sm-6 mx-auto">
					<span> {language === 'English' ? "03": "០៣"} </span>
					<h4> {language === 'English' ? "The Best Guides": "មគ្គុទ្ទេសល្អបំផុត"} </h4>
					<p> {language === 'English' ? "Guides specialized in archeology, ornithology, culture and adventure with disposition at all times with motivation and confidence.": 
					"មគ្គុទ្ទេសក៍ដែលមានឯកទេសខាងបុរាណវិទ្យា រចនាបថ វប្បធម៌ និងការផ្សងព្រេងជាមួយការតាំងចិត្តគ្រប់ពេលវេលាជាមួយនឹងការលើកទឹកចិត្ត និងទំនុកចិត្ត។"} </p>
				</div>

				<div className="col-sm-6 mx-auto">
					<span> {language === 'English' ? "04": "០៤"} </span>
					<h4> {language === 'English' ? "Immersive Storytelling and History": "ការពិពណ៌នា និងប្រវត្តិសាស្រ្ត"} </h4>
					<p> {language === 'English' ? "Dive into the rich tapestry of history and culture as our attractions come to life through immersive storytelling. Our guides are passionate experts who breathe life into each narrative, offering you a profound understanding of the stories behind the landmarks and exhibits.": 
            "ចូលទៅក្នុងផ្ទាំងគំនូរដ៏សំបូរបែបនៃប្រវត្តិសាស្ត្រ និងវប្បធម៌ នៅពេលដែលភាពទាក់ទាញរបស់យើងមានជីវិតតាមរយៈការនិទានរឿងដ៏អស្ចារ្យ។ មគ្គុទ្ទេសក៍របស់យើងគឺជាអ្នកជំនាញដែលមានចំណង់ចំណូលចិត្តដែលដកដង្ហើមជីវិតចូលទៅក្នុងការនិទានរឿងនីមួយៗដោយផ្តល់ឱ្យអ្នកនូវការយល់ដឹងយ៉ាងជ្រាលជ្រៅអំពីរឿងរ៉ាវនៅពីក្រោយកន្លែងសម្គាល់និងកន្លែងតាំងពិពណ៌។"} </p>
				</div>
			</div>
		</div>
    </>
  )
}
export default About

import Card from './components/Card.jsx'


function App() {
  const jobOpenings = [
  {
    brandlogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 55,
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 75,
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 65,
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Cloud Support Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45,
    location: "Chennai, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "4 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 85,
    location: "Remote, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 60,
    location: "Pune, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "10 days ago",
    post: "Software Automation Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 80,
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "2 months ago",
    post: "AI Research Intern",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 35,
    location: "Remote, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/samsung.com",
    companyName: "Samsung",
    datePosted: "3 weeks ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 58,
    location: "Noida, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/oracle.com",
    companyName: "Oracle",
    datePosted: "7 days ago",
    post: "Database Administrator",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Gurgaon, India"
  }
];



console.log(jobOpenings)
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,index){
        return <div key={index}>
          <Card company ={elem.companyName} post={elem.post} tag1= {elem.tag1} tag2 = {elem.tag2} brandlogo={elem.brandlogo}/>
        </div>
      })}
    </div>
  )
}

export default App
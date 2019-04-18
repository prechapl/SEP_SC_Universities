const seedSchools = [
  {
    name: 'University of South Carolina',
    image: 'https://www.usnews.com/img/college-photo_19595.jpg',
    logo: 'http://i68.tinypic.com/s6i2dc.jpg',
    streetAddress: '1244 Blossom Street',
    cityState: 'Columbia, SC',
    blurb:
      'The University of South Carolina is a public university in Columbia. ',
    description:
      "University of South Carolina is a public institution that was founded in 1801. It has a total undergraduate enrollment of 26,362, its setting is city, and the campus size is 444 acres. It utilizes a semester-based academic calendar. University of South Carolina's ranking in the 2019 edition of Best Colleges is National Universities, 106.",
    tuition: 'in-state $12,262; out-of-state $32,362 (2017-18)',
    typicalSAT: 'Reading and Writing 560-650, Math 560-650 (2016–17)',
    acceptanceRate: '64.5%',
    enrollment: '34,731'
  },
  {
    name: 'Clemson University',
    image: 'https://www.usnews.com/img/college-photo_23072.jpg',
    logo: 'http://i68.tinypic.com/2608k8g.jpg',
    streetAddress: 'Clemson University ln',
    cityState: 'Clemson, South Carolina',
    blurb: 'A top-25 public university with a reputation for excellence.',
    description:
      "Clemson University is a public institution that was founded in 1889. It has a total undergraduate enrollment of 19,402, its setting is suburban, and the campus size is 17,000 acres. It utilizes a semester-based academic calendar. Clemson University's ranking in the 2019 edition of Best Colleges is National Universities, 66. Its in-state tuition and fees are $14,970 (2018-19); out-of-state tuition and fees are $36,724 (2018-19).",
    tuition: 'In-state $14,272, Out-of-state $33,190',
    typicalSAT: 'Reading and Writing 560-660, Math 590-680 (2016–17)',
    acceptanceRate: '51.3%',
    enrollment: '19,402'
  },
  {
    name: 'College of Charleston',
    image: 'https://www.usnews.com/img/college-photo_32905.jpg',
    logo: 'http://i65.tinypic.com/rsa2as.jpg',
    streetAddress: '66 George St',
    cityState: 'Charleston, SC',
    blurb:
      'Founded in 1770 ,it is the oldest college in South Carolina, the 13th oldest in the United States.',
    description:
      "College of Charleston is a public institution that was founded in 1770. It has a total undergraduate enrollment of 9,895, its setting is urban, and the campus size is 52 acres. It utilizes a semester-based academic calendar. College of Charleston's ranking in the 2019 edition of Best Colleges is Regional Universities South, 11. Its in-state tuition and fees are $12,738 (2018-19); out-of-state tuition and fees are $31,920 (2018-19).",
    tuition: 'In-state $11,322 , Out-of-state $28,866',
    typicalSAT: 'Reading and Writing 500-600, Math 500-590',
    acceptanceRate: '77%',
    enrollment: '10,033'
  },
  {
    name: 'The Citadel',
    image: 'https://www.usnews.com/img/college-photo_16642.jpg',
    logo: 'http://i65.tinypic.com/29zzdyq.jpg',
    streetAddress: '171 Moultrie St, Charleston, SC',
    cityState: 'Charleston, SC',
    blurb:
      'The Citadel is a state-supported military college located in Charleston, South Carolina.',
    description:
      'The Citadel, also known as The Military College of South Carolina, is located near the Ashley River, just a 10-minute drive from downtown Charleston. Undergraduate Citadel students enroll as the South Carolina Corps of Cadets and thus follow stricter codes than students at other types of schools. Students of any age may not have alcohol on campus and must live in dormitories all four years. There are no fraternities or sororities, and more than 90 percent of students are male.',
    tuition: 'In-state $12,516 , Out-of-state $33,869',
    typicalSAT: 'Reading and Writing 450-590, Math 500-600 (2016–17)',
    acceptanceRate: '75.5%',
    enrollment: '3,506'
  },
  {
    name: 'Furman University',
    image: 'http://i68.tinypic.com/fbkwnl.jpg',
    logo: 'http://i64.tinypic.com/213ewjq.jpg',
    streetAddress: '3300 Poinsett Hwy',
    cityState: 'Greenville, South Carolina',
    blurb:
      'Furman University is a private, coeducational liberal arts college in Greenville, South Carolina.',
    description:
      'Furman University is a private, coeducational liberal arts college in Greenville, South Carolina. Founded in 1826 and named for the clergyman Richard Furman, Furman University is the oldest private institution of higher learning in South Carolina.',
    tuition: '$27,000',
    typicalSAT: '1190',
    acceptanceRate: '64%',
    enrollment: '2,710'
  },
  {
    name: 'Coastal Carolina University',
    image: 'http://i63.tinypic.com/qyz681.jpg',
    logo: 'http://i67.tinypic.com/292of8l.jpg',
    streetAddress: '100 Chanticleer Dr',
    cityState: ' Conway, SC',
    blurb:
      'Coastal Carolina University is a public liberal arts university located near Myrtle Beach.',
    description:
      "Coastal Carolina University offers baccalaureate degrees in 73 major fields of study. Among CCU's graduate-level programs are 25 master's degrees, two educational specialist degrees, and two doctoral programs: the Ph.D. in marine science: coastal and marine systems science, and the Ph.D. in education. The most popular undergraduate majors are marine science, management, exercise and sport science, and communication. CCU boasts a growing array of internship, research and international opportunities for students, as well as numerous online programs through Coastal Online.",
    tuition: '$15,000',
    typicalSAT: '1100',
    acceptanceRate: '60%',
    enrollment: '10,641'
  },
  {
    name: 'Medical University of South Carolina',
    image: 'http://i66.tinypic.com/166zm1g.jpg',
    logo: 'http://i64.tinypic.com/novodg.jpg',
    streetAddress: '171 Ashley Ave',
    cityState: ' Charleston, SC',
    blurb: 'Medical school in Charleston, South Carolina',
    description:
      'The Medical University of South Carolina is a public medical school in Charleston, South Carolina. It opened in 1824 as a small private college aimed at training physicians. It is one of the oldest continually operating schools of medicine in the United States and the oldest in the Deep South.',
    tuition: '$59,978',
    typicalSAT: 'Reading and Writing 460-570, Math 450-565',
    acceptanceRate: '67%',
    enrollment: '743'
  },
  {
    name: 'Winthrop University',
    image: 'http://i65.tinypic.com/2isi902.jpg',
    logo: 'http://i64.tinypic.com/261ye4n.jpg',
    streetAddress: '701 Oakland Ave',
    cityState: 'Rock Hill, SC',
    blurb:
      'Winthrop University is a public, coeducational, liberal arts university located in Rock Hill, South Carolina',
    description:
      'Winthrop is a public, comprehensive university that is committed to be among the very best institutions of our kind in the nation. Through an educational experience that blends liberal arts, professional programs, global awareness and civic engagement, Winthrop will help you develop the knowledge, skills, and values that will enrich your life forever and prepare you for all the future holds.',
    tuition: '$16,000',
    typicalSAT: 'Reading and Writing 460-570, Math 450-565',
    acceptanceRate: '67%',
    enrollment: '5,813'
  }
];

module.exports = seedSchools;

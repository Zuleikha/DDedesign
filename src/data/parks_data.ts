// Parks data with real Irish dog-friendly parks
// Updated TypeScript version for parks_data.ts

export interface Park {
  id: number;
  name: string;
  address: string;
  county: string;
  phone?: string;
  email?: string;
  website?: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  amenities?: string[];
  leashRules?: string;
  size?: string;
  hours: string;
}

export const parksData: Park[] = [
  // EXISTING REAL PARKS (KEPT)
  {
    id: 1,
    name: "Phoenix Park",
    address: "Phoenix Park, Dublin 8",
    county: "Dublin",
    phone: "01 820 5800",
    email: "phoenixparkvisitorcentre@opw.ie",
    website: "https://phoenixpark.ie",
    rating: 4.8,
    reviewCount: 1245,
    description: "Phoenix Park is one of Europe's largest enclosed recreational spaces, providing a vast green area for dogs to explore. While dogs must be kept on leads in certain areas, there are designated zones where they can run freely. The park spans 1,752 acres and offers numerous walking trails through woodland and open grassland, perfect for exercising your canine companion.",
    image: "",
    amenities: [
      "Designated off-leash areas",
      "Water fountains",
      "Waste bins",
      "Picnic areas",
      "Visitor center",
      "Parking"
    ],
    leashRules: "Dogs must be kept on leads near deer, playgrounds, and the visitor center. Off-leash permitted in designated areas.",
    size: "1,752 acres",
    hours: "Open 24 hours daily, Visitor Centre: 9:30am-5:30pm"
  },
  {
    id: 2,
    name: "St. Anne's Park",
    address: "Mount Prospect Avenue, Raheny, Dublin 5",
    county: "Dublin",
    phone: "01 222 5278",
    email: "parks@dublincity.ie",
    website: "https://www.dublincity.ie/residential/parks/dublin-city-parks/visit-park/st-annes-park",
    rating: 4.7,
    reviewCount: 876,
    description: "St. Anne's Park is Dublin's second largest municipal park, spanning 240 acres. It features a dedicated dog park where your furry friends can run off-leash safely. The park offers beautiful rose gardens, woodland walks, and open playing fields. There are plenty of paths for on-leash walking throughout the rest of the park, making it a favorite destination for dog owners in North Dublin.",
    image: "",
    amenities: [
      "Dedicated dog park area",
      "Water fountains",
      "Waste bins",
      "Café",
      "Toilets",
      "Parking"
    ],
    leashRules: "Off-leash permitted in the dedicated dog park area only. Dogs must be on leads in all other areas of the park.",
    size: "240 acres",
    hours: "Monday-Sunday: 8:00am-9:30pm (summer), 8:00am-4:30pm (winter)"
  },
  {
    id: 3,
    name: "Killiney Hill",
    address: "Killiney Hill Road, Killiney, Co. Dublin",
    county: "Dublin",
    phone: "01 205 4700",
    email: "info@dlrcoco.ie",
    website: "https://www.dlrcoco.ie/en/parks-outdoors/parks/killiney-hill-park",
    rating: 4.9,
    reviewCount: 732,
    description: "Killiney Hill offers spectacular panoramic views of Dublin Bay and the Wicklow Mountains. This 200-acre park is extremely popular with dog walkers due to its off-leash policy throughout most areas. The varied terrain includes woodland paths, open grassy areas, and rocky outcrops, providing an exciting and stimulating environment for dogs to explore.",
    image: "",
    amenities: [
      "Off-leash areas",
      "Waste bins",
      "Picnic areas",
      "Viewing points",
      "Parking"
    ],
    leashRules: "Dogs may be off-leash throughout most of the park, but should be kept under control. Leads required near the car park and picnic areas.",
    size: "200 acres",
    hours: "Open daily from dawn to dusk"
  },
  {
    id: 4,
    name: "Marlay Park",
    address: "Grange Road, Rathfarnham, Dublin 16",
    county: "Dublin",
    phone: "01 205 4700",
    email: "info@dlrcoco.ie",
    website: "https://www.dlrcoco.ie/en/parks-outdoors/parks/marlay-park",
    rating: 4.6,
    reviewCount: 895,
    description: "Marlay Park features a dedicated dog park where your four-legged friends can socialize and play off-leash in a secure environment. The park spans 300 acres and includes woodland walks, extensive playing fields, and a craft courtyard. The dedicated dog park is divided into separate areas for small and large dogs, ensuring a safe experience for all canines.",
    image: "",
    amenities: [
      "Dedicated dog park with separate areas for small and large dogs",
      "Water stations",
      "Waste bins",
      "Café",
      "Toilets",
      "Parking"
    ],
    leashRules: "Off-leash permitted only in the dedicated dog park. Dogs must be on leads in all other areas of the park.",
    size: "300 acres",
    hours: "Monday-Sunday: 9:00am-9:00pm (summer), 9:00am-5:00pm (winter)"
  },
  {
    id: 5,
    name: "Shanganagh Park",
    address: "Shankill, Co. Dublin",
    county: "Dublin",
    phone: "01 205 4700",
    email: "info@dlrcoco.ie",
    website: "https://www.dlrcoco.ie/en/parks-outdoors/parks/shanganagh-park",
    rating: 4.5,
    reviewCount: 412,
    description: "Shanganagh Park offers a spacious environment for dog walking with beautiful sea views. The park includes a dedicated dog exercise area where dogs can run off-leash safely. The 36-acre park connects to Shanganagh Cemetery and the coastline, providing extended walking routes.",
    image: "",
    amenities: [
      "Enclosed dog exercise area",
      "Waste bins",
      "Walking trails",
      "Parking"
    ],
    leashRules: "Off-leash permitted only in the dedicated dog exercise area. Dogs must be on leads in all other areas of the park.",
    size: "36 acres",
    hours: "Open daily from dawn to dusk"
  },
  {
    id: 6,
    name: "St. Catherine's Park",
    address: "Lucan, Co. Dublin",
    county: "Dublin",
    phone: "01 890 5000",
    email: "info@fingal.ie",
    website: "https://www.fingal.ie/stcatherinespark",
    rating: 4.6,
    reviewCount: 523,
    description: "St. Catherine's Park is a beautiful green space spanning across Dublin, Kildare, and Meath. The park features extensive woodland areas, open playing fields, and riverside walks along the Liffey. Dogs are welcome throughout the park, with certain areas designated for off-leash exercise.",
    image: "",
    amenities: [
      "Off-leash areas",
      "River access",
      "Waste bins",
      "Picnic areas",
      "Playground",
      "Parking"
    ],
    leashRules: "Dogs must be kept on leads near playgrounds and picnic areas. Off-leash permitted in designated areas.",
    size: "200 acres",
    hours: "Open daily from dawn to dusk"
  },
  {
    id: 7,
    name: "The Iveagh Gardens",
    address: "Clonmel Street, Dublin 2",
    county: "Dublin",
    phone: "01 475 7816",
    email: "info@opw.ie",
    website: "https://heritageireland.ie/places-to-visit/iveagh-gardens/",
    rating: 4.7,
    reviewCount: 389,
    description: "The Iveagh Gardens are a hidden gem in Dublin city center, offering a peaceful retreat from the urban bustle. These Victorian-era gardens feature formal lawns, a rustic grotto, and a cascade. While smaller than some other parks, the Iveagh Gardens provide a pleasant environment for a short dog walk.",
    image: "",
    amenities: [
      "Waste bins",
      "Water features",
      "Seating areas"
    ],
    leashRules: "Dogs must be kept on leads at all times within the gardens.",
    size: "8 acres",
    hours: "Monday-Saturday: 8:00am-6:00pm, Sunday: 10:00am-6:00pm"
  },
  {
    id: 8,
    name: "Cabinteely Park",
    address: "Old Bray Road, Cabinteely, Dublin 18",
    county: "Dublin",
    phone: "01 205 4700",
    email: "info@dlrcoco.ie",
    website: "https://www.dlrcoco.ie/en/parks-outdoors/parks/cabinteely-park",
    rating: 4.5,
    reviewCount: 612,
    description: "Cabinteely Park offers 110 acres of grassland, woodland, and ponds, providing a diverse environment for dog walking. The park features a dedicated dog exercise area where pets can run off-leash safely. The extensive network of paths through different landscapes ensures an interesting walk for both dogs and their owners.",
    image: "",
    amenities: [
      "Dedicated dog exercise area",
      "Waste bins",
      "Café",
      "Toilets",
      "Playground",
      "Parking"
    ],
    leashRules: "Off-leash permitted only in the dedicated dog exercise area. Dogs must be on leads in all other areas of the park.",
    size: "110 acres",
    hours: "Monday-Sunday: 8:00am-8:00pm (summer), 8:00am-5:00pm (winter)"
  },
  {
    id: 9,
    name: "Griffeen Valley Dog Park",
    address: "Griffeen Valley Park, Lucan, Co. Dublin",
    county: "Dublin",
    phone: "01 414 9000",
    email: "info@sdcc.ie",
    website: "https://www.sdcc.ie/en/services/sport-and-recreation/parks-and-playgrounds/griffeen-valley-park/",
    rating: 4.6,
    reviewCount: 342,
    description: "Griffeen Valley Park includes a dedicated dog park where dogs can exercise off-leash in a secure environment. The dog park features separate areas for small and large dogs, ensuring a safe experience for all canines. The wider park offers extensive walking trails along the Griffeen River.",
    image: "",
    amenities: [
      "Secure dog park",
      "Separate areas for different sized dogs",
      "River access",
      "Waste bins",
      "Playground",
      "Sports facilities",
      "Parking"
    ],
    leashRules: "Off-leash permitted only in the dedicated dog park. Dogs must be on leads in all other areas of the park.",
    size: "200 acres (park), 2 acres (dog park)",
    hours: "Monday-Sunday: 8:00am-9:00pm (summer), 8:00am-5:00pm (winter)"
  },
  {
    id: 10,
    name: "Corkagh Park Dog Park",
    address: "Corkagh Park, Clondalkin, Dublin 22",
    county: "Dublin",
    phone: "01 414 9000",
    email: "info@sdcc.ie",
    website: "https://www.sdcc.ie/en/services/sport-and-recreation/parks-and-playgrounds/corkagh-park/",
    rating: 4.5,
    reviewCount: 276,
    description: "Corkagh Park features a dedicated dog park where dogs can exercise off-leash in a secure environment. The dog park is fully enclosed and includes agility equipment to provide mental and physical stimulation for your pet. The wider park spans 300 acres and includes lakes, woodland, and open meadows.",
    image: "",
    amenities: [
      "Secure dog park",
      "Agility equipment",
      "Lakes",
      "Waste bins",
      "Café",
      "Playground",
      "Fishing facilities",
      "Parking"
    ],
    leashRules: "Off-leash permitted only in the dedicated dog park. Dogs must be on leads in all other areas of the park.",
    size: "300 acres (park), 2 acres (dog park)",
    hours: "Monday-Sunday: 8:00am-9:00pm (summer), 8:00am-5:00pm (winter)"
  },
  {
    id: 11,
    name: "Malahide Castle and Gardens",
    address: "Malahide, Co. Dublin",
    county: "Dublin",
    phone: "01 816 9538",
    email: "info@malahidecastleandgardens.ie",
    website: "https://www.malahidecastleandgardens.ie",
    rating: 4.7,
    reviewCount: 892,
    description: "Malahide Castle and Gardens offer extensive grounds for dog walking, with 260 acres of parkland to explore. Dogs are welcome throughout the parkland areas, though they are not permitted in the botanical gardens or inside the castle. The park features woodland walks, open lawns, and a coastal path.",
    image: "",
    amenities: [
      "Waste bins",
      "Café",
      "Toilets",
      "Playground",
      "Visitor center",
      "Parking"
    ],
    leashRules: "Dogs must be kept on leads throughout the park. Not permitted in the botanical gardens or castle interior.",
    size: "260 acres",
    hours: "Monday-Sunday: 9:00am-5:30pm"
  },
  {
    id: 12,
    name: "Ardgillan Castle and Demesne",
    address: "Balbriggan, Co. Dublin",
    county: "Dublin",
    phone: "01 849 2212",
    email: "ardgillancastle@fingal.ie",
    website: "https://www.fingal.ie/ardgillan-castle-and-demesne",
    rating: 4.6,
    reviewCount: 445,
    description: "Ardgillan Castle and Demesne offers 194 acres of parkland with spectacular coastal views. The park features formal gardens, woodland walks, and open grassland areas perfect for dog walking. Dogs are welcome throughout the parkland areas and must be kept on leads at all times.",
    image: "",
    amenities: [
      "Waste bins",
      "Café",
      "Toilets",
      "Visitor center",
      "Parking",
      "Coastal walks"
    ],
    leashRules: "Dogs must be kept on leads at all times throughout the park.",
    size: "194 acres",
    hours: "Monday-Sunday: 10:00am-6:00pm (summer), 10:00am-4:30pm (winter)"
  },

  // NEW REAL PARKS ADDED
  {
    id: 13,
    name: "Tymon Park Dog Park",
    address: "Tallaght, Dublin",
    county: "Dublin",
    phone: "01 414 9000",
    email: "info@sdcc.ie",
    website: "https://www.sdcc.ie/en/services/sport-and-recreation/parks/tymon-park.html",
    rating: 4.7,
    reviewCount: 523,
    description: "Tymon Park is a valuable resource for local communities, providing opportunities for a wide range of outdoor activities. The park features a dedicated dog park with double-gated entrance for safety. The park spans both sides of the M50 and offers lakes, fields, and woodlands for exploration.",
    image: "",
    amenities: [
      "Fenced dog park",
      "Double-gated entrance",
      "Water fountains",
      "Waste bins",
      "Park benches",
      "Parking"
    ],
    leashRules: "Off-leash permitted only in the dedicated dog park. Dogs must be on leads in all other areas of the park.",
    size: "Large park spanning both sides of M50",
    hours: "Monday-Sunday: 10:00am-8:00pm"
  },
  {
    id: 14,
    name: "Bushy Park",
    address: "1 Bushy Park Rd, Terenure, Dublin",
    county: "Dublin",
    phone: "01 222 5278",
    email: "parks@dublincity.ie",
    website: "https://www.dublincity.ie/residential/parks/dublin-city-parks/visit-park/bushy-park",
    rating: 4.5,
    reviewCount: 387,
    description: "Bushy Park in Terenure is a must-visit for dog walkers. The park includes a designated off-leash dog area for dogs to play in the open space. Additionally, the park offers facilities for soccer, yoga, and other activities under its mature trees.",
    image: "",
    amenities: [
      "Designated off-leash area",
      "Waste bins",
      "Sports facilities",
      "Yoga areas",
      "Parking"
    ],
    leashRules: "Off-leash permitted in designated area only. Dogs must be on leads in all other areas of the park.",
    size: "Medium sized urban park",
    hours: "Monday-Sunday: 10:00am-varies by season (17:00-22:00)"
  },
  {
    id: 15,
    name: "Waterstown Park",
    address: "Palmerstown, Dublin 20",
    county: "Dublin",
    phone: "01 414 9000",
    email: "info@sdcc.ie",
    website: "https://www.sdcc.ie/en/services/sport-and-recreation/parks/waterstown-park.html",
    rating: 4.4,
    reviewCount: 298,
    description: "Waterstown Park is a beautiful green space in Palmerstown offering excellent facilities for dog owners. The park features open grassland areas, walking trails, and sports facilities. Dogs are welcome throughout the park with designated areas for off-leash exercise.",
    image: "",
    amenities: [
      "Off-leash areas",
      "Walking trails",
      "Waste bins",
      "Sports facilities",
      "Parking"
    ],
    leashRules: "Off-leash permitted in designated areas. Dogs must be on leads near sports facilities and playgrounds.",
    size: "Large municipal park",
    hours: "Monday-Sunday: 8:00am-9:00pm (summer), 8:00am-5:00pm (winter)"
  },
  {
    id: 16,
    name: "Sean Walsh Park",
    address: "Tallaght, Dublin 24",
    county: "Dublin",
    phone: "01 414 9000",
    email: "info@sdcc.ie",
    website: "https://www.sdcc.ie/en/services/sport-and-recreation/parks/sean-walsh-park.html",
    rating: 4.3,
    reviewCount: 234,
    description: "Sean Walsh Park in Tallaght provides excellent recreational facilities including areas suitable for dog walking. The park features open grassland, walking paths, and sports facilities. Dogs are welcome throughout the park with certain areas designated for off-leash exercise.",
    image: "",
    amenities: [
      "Open grassland",
      "Walking paths",
      "Waste bins",
      "Sports facilities",
      "Parking"
    ],
    leashRules: "Dogs must be on leads near sports facilities. Off-leash permitted in designated open areas.",
    size: "Large recreational park",
    hours: "Monday-Sunday: 8:00am-9:00pm (summer), 8:00am-5:00pm (winter)"
  },
  {
    id: 17,
    name: "Rathcoole Park",
    address: "Rathcoole, Co. Dublin",
    county: "Dublin",
    phone: "01 414 9000",
    email: "info@sdcc.ie",
    website: "https://www.sdcc.ie/en/services/sport-and-recreation/parks/rathcoole-park.html",
    rating: 4.2,
    reviewCount: 156,
    description: "Rathcoole Park offers a peaceful environment for dog walking with open green spaces and walking trails. The park provides a quiet alternative to busier Dublin parks, making it ideal for dogs who prefer a calmer environment. The park features mature trees and well-maintained paths.",
    image: "",
    amenities: [
      "Walking trails",
      "Open green spaces",
      "Waste bins",
      "Mature trees",
      "Parking"
    ],
    leashRules: "Dogs must be kept on leads throughout the park.",
    size: "Medium sized community park",
    hours: "Monday-Sunday: 8:00am-8:00pm"
  },
  {
    id: 18,
    name: "Arklow Dog Park",
    address: "Arklow, Co. Wicklow",
    county: "Wicklow",
    phone: "0402 42700",
    email: "arklowmunicipaldistrict@wicklowcoco.ie",
    website: "https://www.wicklow.ie/Living/Services/Community/Parks-Open-Spaces/Arklow-Dog-Park",
    rating: 4.4,
    reviewCount: 187,
    description: "Arklow Dog Park is a dedicated space for dogs to exercise and socialize off-leash in a secure environment. The park features double-gated entry points for safety, separate areas for small and large dogs, and various agility equipment to provide mental and physical stimulation.",
    image: "",
    amenities: [
      "Secure fencing",
      "Double-gated entry",
      "Separate areas for different sized dogs",
      "Agility equipment",
      "Waste bins",
      "Seating areas",
      "Parking"
    ],
    leashRules: "Off-leash permitted throughout the park. Dogs must be under voice control.",
    size: "1.5 acres",
    hours: "Monday-Sunday: 8:00am-8:00pm"
  },
  {
    id: 19,
    name: "Eamonn Ceannt Park",
    address: "Sundrive Road, Crumlin, Dublin 12",
    county: "Dublin",
    phone: "01 222 5278",
    email: "parks@dublincity.ie",
    website: "https://www.dublincity.ie/residential/parks/dublin-city-parks/visit-park/eamonn-ceannt-park",
    rating: 4.3,
    reviewCount: 267,
    description: "Eamonn Ceannt Park in Crumlin offers excellent facilities for dog owners including open grassland areas and walking paths. The park features sports facilities, a playground, and designated areas where dogs can exercise. It's a popular local park for families with dogs.",
    image: "",
    amenities: [
      "Open grassland",
      "Walking paths",
      "Waste bins",
      "Sports facilities",
      "Playground",
      "Parking"
    ],
    leashRules: "Dogs must be kept on leads near playground and sports areas. Off-leash permitted in designated open areas.",
    size: "Large urban park",
    hours: "Monday-Sunday: 8:00am-9:00pm (summer), 8:00am-5:00pm (winter)"
  },
  {
    id: 20,
    name: "Ward River Valley Park",
    address: "Swords, Co. Dublin",
    county: "Dublin",
    phone: "01 890 5000",
    email: "info@fingal.ie",
    website: "https://www.fingal.ie/ward-river-valley-park",
    rating: 4.5,
    reviewCount: 334,
    description: "Ward River Valley Park in Swords offers a beautiful linear park following the Ward River. The park provides excellent walking opportunities for dogs with riverside paths, open grassland, and woodland areas. It's a peaceful environment perfect for longer dog walks away from traffic.",
    image: "",
    amenities: [
      "Riverside paths",
      "Open grassland",
      "Woodland areas",
      "Waste bins",
      "Parking"
    ],
    leashRules: "Dogs must be kept on leads throughout the park, especially near the river.",
    size: "Linear park following Ward River",
    hours: "Open daily from dawn to dusk"
  }
];

export default parksData;


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure JS is loaded for dropdowns
import styles from "./Sidebar.module.css"; // Import your custom CSS

// Sample data
let genEds = ["class 1", "class 2", "class 3"];
let lowerDivs = [
  "Com Sci 1",
  "Com Sci 31",
  "Com Sci 32",
  "Com Sci 33",
  "Com Sci 34",
  "Com Sci 35L",
  "Math 31",
  "Math 32",
  "Math 33a",
  "Math 33b",
  "Math 61",
];
let upperDivs = [
  "Com Sci 101",
  "Com Sci 102",
  "Com Sci 103",
  "Com Sci 104",
  "Com Sci 105",
  "Math 101",
  "Math 102",
];

// Define the major lists for each internal school at UCLA
const majorsTheCollege = [
  "African American Studies (B.A.)",
  "African and Middle Eastern Studies (B.A.)",
  "American Indian Studies (B.A.)",
  "American Literature and Culture (B.A.)",
  "Ancient Near East and Egyptology (B.A.)",
  "Anthropology (B.A.)",
  "Anthropology (B.S.)",
  "Arabic (B.A.)",
  "Art History (B.A.)",
  "Asian American Studies (B.A.)",
  "Asian Humanities (B.A.)",
  "Asian Languages and Linguistics (B.A.)",
  "Asian Religions (B.A.)",
  "Asian Studies (B.A.)",
  "Astrophysics (B.S.)",
  "Atmospheric and Oceanic Sciences (B.S.)",
  "Atmospheric and Oceanic Sciences/Mathematics (B.S.)",
  "Biochemistry (B.S.)",
  "Biology (B.S.)",
  "Biophysics (B.S.)",
  "Business Economics (B.A.)",
  "Central and East European Languages and Cultures (B.A.)",
  "Chemistry (B.S.)",
  "Chemistry/Materials Science (B.S.)",
  "Chicana and Chicano Studies (B.A.)",
  "Chinese (B.A.)",
  "Classical Civilization (B.A.)",
  "Climate Science (B.S.)",
  "Cognitive Science (B.S.)",
  "Communication (B.A.)",
  "Comparative Literature (B.A.)",
  "Computational and Systems Biology (B.S.)",
  "Data Theory (B.S.)",
  "Disability Studies (B.A.)",
  "Earth and Environmental Science (B.A.)",
  "Ecology, Behavior, and Evolution (B.S.)",
  "Economics (B.A.)",
  "English (B.A.)",
  "Environmental Science (B.S.)",
  "European Language and Transcultural Studies (B.A.)",
  "European Languages and Transcultural Studies with French and Francophone (B.A.)",
  "European Languages and Transcultural Studies with German (B.A.)",
  "European Languages and Transcultural Studies with Italian (B.A.)",
  "European Languages and Transcultural Studies with Scandinavian (B.A.)",
  "European Studies (B.A.)",
  "Gender Studies (B.A.)",
  "Geography (B.A.)",
  "Geography/Environmental Studies (B.A.)",
  "Geology (B.S.)",
  "Geology/Engineering Geology (B.S.)",
  "Geophysics (B.S.)",
  "Global Studies (B.A.)",
  "Greek (B.A.)",
  "Greek and Latin (B.A.)",
  "History (B.A.)",
  "Human Biology and Society (B.A.)",
  "Human Biology and Society (B.S.)",
  "International Development Studies (B.A.)",
  "Iranian Studies (B.A.)",
  "Japanese (B.A.)",
  "Jewish Studies (B.A.)",
  "Korean (B.A.)",
  "Labor Studies (B.A.)",
  "Latin (B.A.)",
  "Latin American Studies (B.A.)",
  "Linguistics (B.A.)",
  "Linguistics and Anthropology (B.A.)",
  "Linguistics and Asian Languages and Cultures (B.A.)",
  "Linguistics and Computer Science (B.A.)",
  "Linguistics and English (B.A.)",
  "Linguistics and Philosophy (B.A.)",
  "Linguistics and Psychology (B.A.)",
  "Linguistics and Spanish (B.A.)",
  "Linguistics, Applied (B.A.)",
  "Marine Biology (B.S.)",
  "Mathematics (B.S.)",
  "Mathematics, Applied (B.S.)",
  "Mathematics/Applied Science (B.S.)",
  "Mathematics/Economics (B.S.)",
  "Mathematics, Financial Actuarial (B.S.)",
  "Mathematics for Teaching (B.S.)",
  "Mathematics of Computation (B.S.)",
  "Microbiology, Immunology, and Molecular Genetics (B.S.)",
  "Middle Eastern Studies (B.A.)",
  "Molecular, Cell, and Developmental Biology (B.S.)",
  "Neuroscience (B.S.)",
  "Nordic Studies (B.A.)",
  "Philosophy (B.A.)",
  "Physics (B.A.)",
  "Physics (B.S.)",
  "Physiological Science (B.S.)",
  "Political Science (B.A.)",
  "Portuguese and Brazilian Studies (B.A.)",
  "Psychobiology (B.S.)",
  "Psychology (B.A.)",
  "Religion, Study of (B.A.)",
  "Russian Language and Literature (B.A.)",
  "Russian Studies (B.A.)",
  "Sociology (B.A.)",
  "Southeast Asian Studies (B.A.)",
  "Spanish (B.A.)",
  "Spanish and Community and Culture (B.A.)",
  "Spanish and Linguistics (B.A.)",
  "Spanish and Portuguese (B.A.)",
  "Statistics and Data Science (B.S.)",
  "Individual Field of Concentration (B.A./ B.S.)",
];

const majorsSchoolOfArtsAndArchitecture = [
  "Architectural Studies (B.A.)",
  "Art (B.A.)",
  "Dance (B.A.)",
  "Design | Media Arts (B.A.)",
  "World Arts and Cultures (B.A.)",
  "Individual Field of Concentration in the Arts and Architecture (B.A.) *",
];

const majorsTheSamueliSchoolOfEngineering = [
  "Aerospace Engineering (B.S.)",
  "Bioengineering (B.S.)",
  "Chemical Engineering (B.S.)",
  "Civil Engineering (B.S.)",
  "Computer Engineering (B.S.)",
  "Computer Science (B.S.)",
  "Computer Science and Engineering (B.S.)",
  "Electrical Engineering (B.S.)",
  "Materials Engineering (B.S.)",
  "Mechanical Engineering (B.S.)",
];

const majorsHerbAlpertSchoolOfMusic = [
  "Ethnomusicology (B.A.)",
  "Global Jazz Studies (B.A.)",
  "Musicology (B.A.)",
  "Music Composition (B.A.)",
  "Music Education (B.A.)",
  "Music Industry (B.A.)",
  "Music Performance (B.M.)",
];

const majorSchoolOfNursing = ["Nursing - Prelicensure (B.S.)"];

const majorLuskinSchoolofPublicAffairs = ["Public Affairs (B.A.)"];

const majorSchoolOfTheaterFilmAndTelevision = [
  "Film and Television (B.A.)",
  "Theater (B.A.)",
  "Individual Field of Concentration in Theater, Film and Television (B.A.)",
];

const majorSchoolOfEducationAndInformationStudies = [
  "Education and Social Transformation (B.A.)",
];

const majorFieldingSchoolOfPublicHealth = [
  "Public Health (B.A.)",
  "Public Health (B.S.)",
];

// Helper function to list majors from each school under a section
function listDropdownItems(schoolName: string, majors: string[]) {
  return (
    <>
      <li className="dropdown-header">{schoolName}</li>
      {majors.map((major, index) => (
        <li key={index}>
          <a className="dropdown-item" href="#">
            {major}
          </a>
        </li>
      ))}
      <li>
        <hr className="dropdown-divider" />
      </li>{" "}
      {/* Divider between schools */}
    </>
  );
}

// Function to list items such as General Education, Lower Division, and Upper Division
function listItems(list: string[]) {
  return (
    <ul className={`no-borders ${styles.sidebarListContainer}`}>
      {list.map((classID: string, index: number) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={index}
        >
          • {classID}
          <a
            href={`https://www.bruinwalk.com/classes/${classID
              .replaceAll(" ", "-")
              .toLowerCase()}/`}
            target="_blank"
            className={`badge text-bg-primary rounded-pill ${styles.BruinWalkText}`}
            style={{
              fontSize: "12px",
              fontWeight: "normal",
              textDecoration: "none",
            }}
          >
            BruinWalk
          </a>
        </li>
      ))}
    </ul>
  );
}

const Sidebar = () => {
  return (
    <div className={styles.sidebarStyle}>
      <strong className={styles.sidebarTextStrong}>User Information</strong>
      <hr className={styles.sidebarDivider} />
      <p className={styles.sidebarTextNormal}>Major</p>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Major
        </button>
        <ul
          className={`dropdown-menu ${styles.dropdownMenu}`}
          aria-labelledby="dropdownMenuButton"
        >
          {listDropdownItems("The College", majorsTheCollege)}
          {listDropdownItems(
            "School of the Arts and Architecture",
            majorsSchoolOfArtsAndArchitecture
          )}
          {listDropdownItems(
            "The Samueli School of Engineering",
            majorsTheSamueliSchoolOfEngineering
          )}
          {listDropdownItems(
            "Herb Alpert School of Music",
            majorsHerbAlpertSchoolOfMusic
          )}
          {listDropdownItems("School of Nursing", majorSchoolOfNursing)}
          {listDropdownItems(
            "Luskin School of Public Affairs",
            majorLuskinSchoolofPublicAffairs
          )}
          {listDropdownItems(
            "School of Theater, Film, and Television",
            majorSchoolOfTheaterFilmAndTelevision
          )}
          {listDropdownItems(
            "School of Education and Information Studies",
            majorSchoolOfEducationAndInformationStudies
          )}
          {listDropdownItems(
            "Fielding School of Public Health",
            majorFieldingSchoolOfPublicHealth
          )}
        </ul>
      </div>
      <strong className={styles.sidebarTextStrong}>General Education</strong>
      <hr className={styles.sidebarDivider} />
      {listItems(genEds)}
      <strong className={styles.sidebarTextStrong}>Lower Division</strong>
      <hr className={styles.sidebarDivider} />
      {listItems(lowerDivs)}
      <strong className={styles.sidebarTextStrong}>Upper Division</strong>
      <hr className={styles.sidebarDivider} />
      {listItems(upperDivs)}
    </div>
  );
};

export default Sidebar;

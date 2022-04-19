import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// import { useInView } from "react-intersection-observer";
import Layout from "../components/layout";

// https://www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/


import "./practices.css";
import IndividualSignatory from "../components/individual-signatory";

const PracticesPage = () => {
  // const { ref, inView, entry } = useInView({});

  const data = useStaticQuery(graphql`
    {
      allSignatory {
        edges {
          node {
            limits
            name
            dept
          }
        }
      }
    }
  `)

  const listItems = data.allSignatory.edges.map(signatory => IndividualSignatory(signatory.node));


  return (
        <>
          <Layout>
            <div className="practices-wrapper">
              <div className="practices-content">

                <div id="overview" className="overview">
                  <h1>Good Practices for Improving Representation</h1>
                  <p>
                    In line with the APA Strategic Plan's Objective to make the
                    discipline “more inclusive, welcoming, and accessible" and
                    supporting their effort to regularly “review, update, promote, and
                    add to existing guidance and best practices to support diversity,
                    equity, and inclusion throughout the discipline" the Demographics
                    in Philosophy project proposes the following guidelines in order
                    to promote, within the philosophical community, practices that
                    will, if adopted, create a more welcoming and inclusive
                    environment for all. We hope these suggestions will act as a
                    starting point for faculty and students to improve the conditions
                    for everyone in our discipline. The following guidelines promote
                    equal opportunities for underrepresented groups in philosophy and
                    support and encourage academic excellence of all kinds.{" "}
                  </p>
                  <p>
                    Click <a href="#guidelines">here</a> to go straight to the
                    guidelines.
                  </p>
                  <p>
                    Click <a href="#">here</a> to sign on.
                  </p>
                  <h2>List of Signatories</h2>
                  <ul>
                    {listItems}
                    <li>Jane Doe, University of Somewhere</li>
                    <li>Mary Wollstonecraft, Institute for Other Things</li>
                    <li>Valerie Solanas, Center for Applied Feminism</li>
                  </ul>
                </div>
                <div id="adoption" className="adoption">
                  <h1>Adoption of Good Practice policies: Procedure</h1>
                  <p>
                    Where a department adopts a particular Good Practice policy, the
                    Head of Department (or chair of learned society, lead journal
                    editor, etc.) is requested to:
                    <br />
                    (a) ensure to formally document the adoption in the meeting at which
                    the decision is taken
                    <br />
                    (b) inform the Good Practices Secretariat (GPS), so that a list of
                    subscribing departments (learned societies, journals) is publicly
                    available on the Good Practices’s website.
                  </p>
                  <h2>What counts as ‘adopting’ a Good Practice policy?</h2>
                  <p>
                    The recommendations vary in their degree of specificity. In some
                    cases, there is considerable flexibility in how the recommendation
                    might be implemented (e.g. the department is merely asked to
                    ‘consider ways of’ achieving some end). In such cases, we leave it
                    up to departments (etc.) to make their own decision about whether
                    the agreed changes or activities constitute adoption of the policy,
                    since we recognise that different practical constraints will apply
                    to different departments.
                  </p>
                  <p>
                    Similarly, many of the recommendations are open to different
                    interpretations. For example, the Gender Bias document states that
                    hiring panels should include at least one member of an
                    under-representative group unless ‘there are exceptional practical
                    reasons why this is impossible’. Interpretations of ‘exceptional’
                    (not to mention ‘practical’ and ‘impossible’) may differ both
                    between and within departments. In such cases, we simply leave it up
                    to departments to interpret the recommendations for themselves.
                  </p>
                  <p>
                    Simply <em>deciding</em> to implement the recommendations does{" "}
                    <em>not</em> constitute adoption of the relevant Good Practice
                    policy. There must be a clear plan for actual implementation. This
                    may involve a wide variety of activities, including adding/changing
                    information in student handbooks, changing training or induction
                    sessions for teaching assistants, assigning a particular role to a
                    member of staff, etc. The department should deem itself to have
                    ‘adopted’ the relevant policy only at the point where a clear plan
                    has been drawn up. This must include a timetable for implementation
                    (e.g. where information in student handbooks cannot be altered until
                    the start of the next academic year).
                  </p>
                  <p>
                    We recommend that, where a department wishes to adopt a Good
                    Practice policy in the sense described above, the department head
                    takes the bullet-pointed list of recommendations and supplements
                    each bullet point with a clear list of changes or activities that
                    the department intends to carry out in order to implement the
                    recommendation, together with a clear timetable for completion. (The
                    Good Practice documents are also available as Word documents from
                    the website to facilitate this.) They may, of course, wish to
                    delegate this task to the chair of a sub- committee – perhaps
                    involving student and TA representatives. The resulting document
                    should be approved at a departmental meeting and made available to
                    all relevant people (including e.g. administrative staff and
                    teaching assistants where necessary), so that it is easy to check
                    whether the department has kept to its timetable and, thereafter, is
                    continuing to adhere to its own policy.
                  </p>
                  <p>
                    We appreciate that not all groupings of philosophers have any formal
                    status (as a ‘department’ or ‘discipline area’ etc.), and that
                    departments are bound by their own institutions’ existing policies
                    and procedures. Hence there may be some recommendations that a
                    particular department or group does not have the power either (a) to
                    formally endorse or (b) to implement. In such cases, the group in
                    question will be deemed to subscribe to the policy if (re (a)) it
                    has ensured that the policy adopted is known and informally agreed
                    by all members of the group, or (re (b)) it has adopted as many of
                    the Good Practice recommendations as it reasonably can, given any
                    impediments posed by its lack of formal status.
                  </p>
                  <p>
                    Where a grouping of philosophers is within a larger unit with other
                    disciplines there are two ways that the policies might be adopted.
                    It might be that only the philosophers decide to adopt the policies
                    (in so far as this is possible for a non- departmental group; see
                    (5) above). In this case, they count as adopting the policies only
                    for the philosophers, which should be made clear in all
                    documentation. However, it might be that the larger group decides to
                    adopt the policies. In this case, the mixed unit counts as having
                    adopted the policies.
                  </p>
                </div>
                <div className="guidelines">
                  <h1>Guidelines</h1>
                  <section id="conferences">
                    <h2>Conferences & Events</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                  </section>
                  <section id="sexual-harrassment">
                    <h2>Sexual Harrassment</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                  </section>
                  <section id="relationships">
                    <h2>Staff-Student Relationships</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                  </section>
                  <section id="caregivers">
                    <h2>Caregivers</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                  </section>
                  <section id="implicit-bias">
                    <h2>Implicit Bias</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                  </section>
                  <section id="research-projects">
                    <h2>Research Projects</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                  </section>
                  <section id="learned-societies">
                    <h2>Learned societies</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                  </section>
                  <section id="journals">
                    <h2>Journals</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                  </section>
                  <section id="non-tenure-track">
                    <h2>Non-tenure track</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                  </section>
                  <section id="faculty">
                    <h2>Faculty</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                  </section>
                </div>
              </div>

              <nav className="practices-nav">
                <ol>
                  <li>
                    <a href="#overview">Oerview</a>
                  </li>
                  <li>
                    <a href="#adoption">Adoption</a>
                  </li>
                  <li>
                    <a href="#conferences">Conferences</a>
                  </li>
                  <li>
                    <a href="#sexual-harrassment">Sexual Harrassment</a>
                  </li>
                  <li>
                    <a href="#relationships">Staff-Student Relationships</a>
                  </li>
                  <li>
                    <a href="#caregivers">Caregivers</a>
                  </li>
                  <li>
                    <a href="#implicit-bias">Implicit Bias</a>
                  </li>
                  <li>
                    <a href="#research-projects">Research Projects</a>
                  </li>
                  <li>
                    <a href="#learned-societies">Learned Societies</a>
                  </li>
                  <li>
                    <a href="#journals">Journals</a>
                  </li>
                </ol>
              </nav>
            </div>
          </Layout>
        </>
  )
};

export default PracticesPage;

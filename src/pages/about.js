import React from 'react'
import Layout from '../components/layout'
import Member from '../components/member'
import {graphql, useStaticQuery} from "gatsby";
import {forEach} from "react-bootstrap/cjs/ElementChildren";



var profileImage = {}

export default function(){
    const data = useStaticQuery(graphql`{
        photos:allFile(filter: {relativeDirectory: {eq: "members"}} ) {
            edges {
              node {
                name
                childImageSharp {
                  fixed(height: 125) {
                    ...GatsbyImageSharpFixed_withWebp_tracedSVG
                  }
                } 
              }
            }
        }
    
    }
    `)

    //Map images into Map
    data.photos.edges.forEach(f => {
        profileImage[f.node.name] = f.node.childImageSharp.fixed
    })

    return <Layout>


        Contact us at <a href="mailto:dataonwomen@gmail.com">dataonwomen@gmail.com</a>

        <h1>Professors</h1>

        <Member name={"Nicole Hassoun"} photo={profileImage["Hassoun"]} position={"(Executive Director)"} className={"professor"}>
            Nicole Hassoun is an associate professor in philosophy at Binghamton University. Her book Globalization and Global Justice: Shrinking Distance, Expanding Obligations (Cambridge University Press, 2012) was runner up for the APA book prize and her articles appear in journals like the American Philosophical Quarterly, Journal of Development Economics, The Australasian Journal of Philosophy, PLOS ONE, The European Journal of Philosophy, and Utilitas.
        </Member>

        <Member name={"Eric Schwitzgebel"} photo={profileImage["schwitzgebel"]} position={"(Co-Director)" } className={"professor"}>
            Eric Schwitzgebel is a professor of philosophy at University of California, Riverside. Recent works include: Perplexities of Consciousness (MIT Press, 2011), “A Theory of Jerks” (Aeon Magazine, 2014), and “1% Skepticism” (Nous, forthcoming). He is a member of the APA Committee on the Status and Future of the Profession. On his blog, and more recently in op-eds for The Los Angeles Times, he regularly critiques the narrowness and homogeneity of academic philosophy in the mainstream Anglophone tradition.
        </Member>

        <Member name={"Julie Van Camp"} photo={profileImage["vancamp"]} position={"" } className={"professor"}>
            Julie C. Van Camp is Professor Emerita of Philosophy at California State University, Long Beach, where she taught philosophy of art, philosophy of law, and applied ethics. She is currently Executive Director & Secretary-Treasurer of the American Society for Aesthetics. She was privileged to study with Elizabeth Lane Beardsley at Temple University and inspired to encourage women to pursue philosophy by a former male colleague who told her long ago that "female philosopher is an oxymoron."
        </Member>

        <Member name={"Sally Haslanger"} photo={profileImage["haslanger"]} position={"" } className={"professor"}>
            Sally Haslanger is Ford Professor of Philosophy and Women's and Gender Studies at the Massachusetts Institute of Technology. She specializes in metaphysics, epistemology, feminist theory, and critical race theory. Her book Resisting Reality: Social Construction and Social Critique (Oxford 2012) won the Joseph B. Gittler award for work in philosophy of the social sciences. She was elected to the American Academy of Arts and Sciences in 2015.
        </Member>

        <Member name={"Ruth Chang"} photo={profileImage["chang"]} position={"" } className={"professor"}>
            Ruth Chang is a philosopher at Rutgers University, New Brunswick. Before arriving at Rutgers, she was a Junior Research Fellow at Balliol College, Oxford where she was completing her dissertation. She has also held visiting positions in the philosophy department at the University of California, Los Angeles and the University of Chicago Law School. Before her life as a philosopher, she worked as a law associate on a (pro bono) death penalty case and several (non pro bono) product liability cases. She has a J.D. from Harvard Law School and an A.B. from Dartmouth College.
        </Member>


        <Member name={"Tom Dougherty"} photo={profileImage["dougherty"]} position={"" } className={"professor"}>
            Tom Dougherty is a University Lecturer in the Philosophy Faculty at the University of Cambridge and a Fellow of Trinity Hall. His research focuses on moral and political philosophy.
        </Member>


        <Member name={"Kenneth Clatterbaugh"} photo={profileImage["clatterbaugh"]} position={"" } className={"professor"}>
            Kenneth C. Clatterbaugh is an American philosopher. He is Chair of the department of Philosophy at the University of Washington. His interests are modern philosophy, social philosophy, and gender studies.
        </Member>


        <Member name={"Kathryn Norlock"} photo={profileImage["norlock"]} position={"" } className={"professor"}>
            Kathryn J. Norlock is the Kenneth Mark Drain Chair in Ethics and Associate Professor of Philosophy at Trent University in Peterborough, Ontario, Canada. She is the President of the Society for Analytical Feminism (SAF), and past president of the Canadian Society for Women In Philosophy (CSWIP). She is a co-founder and co-editor of Feminist Philosophy Quarterly, an open-access, peer-reviewed journal.
        </Member>

        <Member name={"Charles Mills"} photo={profileImage["mills"]} position={"" } className={"professor"}>
            Charles W. Mills is John Evans Professor of Moral and Intellectual Philosophy at Northwestern University. He works in the general area of oppositional political philosophy, with a special focus on race.
        </Member>

        <Member name={"Edouard Machery"} photo={profileImage["machery"]} position={"" } className={"professor"}>
            Edouard Machery is Professor in the Department of History and Philosophy of Science at the University of Pittsburgh, the incoming Director of the Center for Philosophy of Science at the University of Pittsburgh . His research focuses on the philosophical issues raised by psychology and cognitive neuroscience. He was awarded the Chancellor’s Distinguished Research Award by the University of Pittsburgh, the Stanton Prize by the Society for Philosophy and Psychology, and holds a Regular Visiting Distinguished Professorship at Eidyn (Edinburgh).
        </Member>

        <Member name={"Meena Krishnamurthy"} photo={profileImage["krishnamurthy"]} position={"" } className={"professor"}>
            Meena Krishnamurthy is an Assistant Professor in the Department of Philosophy and in the Program in Philosophy, Politics, and Economics at the University of Michigan. She works in social and political philosophy, mostly in the area of normative democratic theory.
        </Member>

        <Member name={"Amia Srinivasan"} photo={profileImage["srinivasan"]} position={"" } className={"professor"}>
            Amia Srinivasan is a lecturer (assistant professor) at University College London. She works on topics in epistemology, ethics, metaphilosophy, social and political philosophy, and feminism.
        </Member>

        <Member name={"Ned Markosian"} photo={profileImage["markosian"]} position={"" } className={"professor"}>
            Ned Markosian, is professor of philosophy at the University of Massachusetts at Amherst. He works primarily in metaphysics.
        </Member>

        <Member name={"Andrew Janiak"} photo={profileImage["janiak"]} position={"" } className={"professor"}>
            Janiak is Professor of Philosophy, Chair of the Department, and the Chair of the Bass Society of Fellows at Duke. He is a co-leader of Project Vox, an international enterprise that seeks to recover the lost voices of women in the history of modern science and philosophy.
        </Member>

        <Member name={"Carolyn Jennings"} photo={profileImage["jennings"]} position={"" } className={"professor"}>
            Carolyn Jennings is an assistant professor of philosophy at University of California, Merced. Recent works include: “Action without Attention” (with B. Nanay, Analysis, forthcoming), “The Standard Theory of Conscious Perception” (Proceedings of the 37th Annual Conference of the Cognitive Science Society, 2015), “Consciousness without Attention” (Journal of the American Philosophical Association, 2015), “Attention and Perceptual Organization” (Philosophical Studies, 2015), “The Subject of Attention" (Synthese, 2012), and “Inductive Parsimony and the Methodological Argument” (Consciousness & Cognition, 2012).
        </Member>


        <Member name={"Michael Rea"} photo={profileImage["rea"]} position={"" } className={"professor"}>
            Michael Rea is Rev. John A. O’Brien Professor of Philosophy at the University of Notre Dame, and is Affiliated Faculty in the Notre Dame Gender Studies Program. His research focuses primarily on topics in metaphysics, philosophy of religion, and analytic theology.
        </Member>



        <br/><br/>
        <h1>Graduate Students</h1>
        <Member name={"Sherri Conklin "} photo={profileImage["conklin"]} position={"(Co-Director)"}  className={"student"}>
            As a PhD student in the Department of Philosophy at UCSB, Sherri conducts research in moral worth, normative theory, and moral psychology.
        </Member>

        <Member name={"Jenn Dum"} photo={profileImage["dum"]} position={""}  className={"student"}>
            Jenn Dum is a Ph.D. Student in Philosophy at Binghamton University, SUNY. Her research interests are in Social and Political Philosophy, Applied Ethics, and Philosophy of Education.
        </Member>

        <Member name={" Aaron Schultz"} photo={profileImage["schultz"]} position={""}  className={"student"}>
            Aaron Schultz is a  PhD student at Binghamton University in the philosophy program. He is primarily interested in Buddhist ethics, Buddhist meditation practices, and Metaethics. Before discovering his passion for philosophy, Aaron studied film and video production at Grand Valley State University. He also holds an MA in philosophy from Kent State University.
        </Member>

        <Member name={"Junyi Dong"} photo={profileImage["dong"]} position={""}  className={"student"}>
            Junyi Dong is a Ph.D student at Binghamton University mathematics department.
        </Member>

        <Member name={"Morgan Thompson"} photo={profileImage["thompson"]} position={""}  className={"student"}>
            Morgan Thompson is a PhD student in the Department of History and Philosophy of Science at the University of Pittsburgh. Her work is primarily in philosophy of science and philosophy of neuroscience. She also has research interests in the causes of underrepresentation of various groups in philosophy and potential interventions to improve philosophy's climate for members of those groups.
        </Member>

        <Member name={"Mark Fortney"} photo={profileImage["fortney"]} position={""}  className={"student"}>
            Mark is a PhD student at the University of Toronto. He mostly works on philosophy of mind and cognitive science.
        </Member>

        <Member name={"Ben Bronner"} photo={profileImage["bronner"]} position={""}  className={"student"}>
            Ben is a graduate student in the philosophy department at Rutgers University. He is primarily interested in normative and applied ethics.
        </Member>

        <Member name={"Isaac Wilhelm"} photo={profileImage["wilhelm"]} position={""}  className={"student"}>
            Isaac is a graduate student in the philosophy department at Rutgers University. He has a B.A. in mathematics and a B.A. in film theory from the University of Chicago, and an M.A. in philosophy from Tufts University. His research is currently focused on philosophy of science and metaphysics, though he has also worked in logic, formal epistemology, and the philosophy of language.
        </Member>

        <Member name={"Astrid Paulsson"} photo={profileImage["paulsson"]} position={""}  className={"student"}>
            Astrid Paulsson does research on morally enhancing global institutions and is a senior PhD student at Charles Sturt University, former student at Centre for Applied Philosophy and Public Ethics (CAPPE) and former visiting scholar at Yale University. She wrote articles about global poverty in Green Left Weekly and has been teaching locally while finishing her PhD. Her dissertation is currently under review and the topic is Empathy and Global Justice.
        </Member>


        <br/><br/>
        <h1>Additional Collaborators </h1>
        <Member name={"Lia Shaked"} photo={profileImage["shaked"]} position={""}  className={"staff"}>
            Lia Shaked is a senior double majoring in Studio Art with a concentration in Art and Design and Psychology. She was the web designer for the Global Health Impact, and hopes to find a career in the graphic design field.
        </Member>

        <Member name={"Eric Krebs"} photo={profileImage["krebs"]} position={""}  className={"staff"}>
            Eric Krebs is a junior at Xavier High School in Manhattan, NY.
        </Member>

        <Member name={"Jean Krebs"} photo={profileImage["jkrebs"]} position={""}  className={"staff"}>
            Jean Krebs is a junior at Binghamton University double majoring in Philosophy, Politics and Law and Women, Gender, and Sexuality Studies. In the future, she will be pursuing a law degree and a Master’s in Public Health.
        </Member>
    </Layout>
}

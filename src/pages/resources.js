import React from 'react'
import Layout from '../components/layout'
import YouTube from "react-youtube";

const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
    },
};

const IndexPage = () => (
    <Layout>


        <div className="video"> <YouTube videoId="-8vP2nrdEfk" opts={opts}  /> </div>

        <h1>Other Data on Women in Philosophy</h1>

        <h3>Graduate Programs &amp; PhDs:</h3>
        <ul>
                <li><a href="http://www.faculty.ucr.edu/~eschwitz/SED.htm">Survey of Earned Doctorates Philosophy Data on Gender, Ethnicity, and Race</a> - Maintained by Eric Schwitzgebel (with NSF permission)</li>
                <li><a href="https://goo.gl/yrvFYS">Survey of Earned Doctorates </a> - Sally Haslanger</li>
                <li><a href="http://c.ymcdn.com/sites/www.apaonline.org/resource/resmgr/Data_on_Profession/Women_in_Philosophy.pdf">APA Fact Sheet on Women in Philosophy</a></li>
        </ul>

        <h3>Faculty:</h3>
        <ul>
                <li><a href="https://www.provost.iastate.edu/faculty-and-staff-resources/development/isu-advance/faculty-resources/resource-pages">Faculty Search Resource Pages</a></li>
                <li><a href="http://placementdata.com/">Academic Placement Data and Analysis</a> - Jennings, C.., Kyrilov, A., Cobb, P., Vlasits, J., Vinson, D. W., Montes, E., &amp; Franco, C.: </li>
                <li><a href="https://web.csulb.edu/~jvancamp/doctoral_2004.html">Tenured/tenure-track faculty women at 98 U.S. doctoral programs in philosophy.</a> Maintained by Julie Van Camp (2004-2016). Website.</li>
                <li><a href="http://www.mapforthegap.com/resources.html">Statistics Compiled by MAP. </a> Word Document.</li>
                <li><a href="http://www.apaonlinecsw.org/data-on-women-in-philosophy">APA Committee on the Status of Women Data</a> on Women in Philosophy page</li>
                <li><a href="http://faculty.ucr.edu/~eschwitz/SchwitzAbs/WomenInPhil.htm">Women in Philosophy: Quantitative Analyses of Specialization, Prevalence, Visibility, and Generational Change </a> - Schwitzgebel, E.  &amp; Dicey Jennings, C.:</li>
                <li><a href="https://blog.apaonline.org/?s=hassoun">Blog of the APA</a></li>

         </ul>

        <h3>Professional Activity:</h3>
        <ul>
                <li><a href="http://www.apaonline.org/?demographics">APA Membership Demographics.</a> </li>
                <li> <a href="http://schwitzsplinters.blogspot.com/2015/11/percentage-of-women-at-apa-meetings.html">Percentage of Women at APA Meetings, 1955, 1975, 1995, 2015.</a> Eric Schwitzgebel</li>
        </ul>

        <h3>Publishing:</h3>
        <ul>
                <li> <a href="http://kieranhealy.org/blog/archives/2015/02/25/gender-and-citation-in-four-general-interest-philosophy-journals-1993-2013/">Gender and Citation in Four General-Interest Philosophy Journals, 1993-2013. </a> Kieran Healy</li>
                <li><a href="http://kieranhealy.org/blog/archives/2013/06/19/lewis-and-the-women/"> Lewis and the Women.</a> Kieran Healy</li>
                <li><a href="http://schwitzsplinters.blogspot.com/2015/12/only-13-of-authors-in-five-leading.html"> Only 13% of Authors in Five Leading Philosophy Journals Are Women. </a>Eric Schwitzgebel</li>
                <li><a href="http://ir.lib.uwo.ca/fpq/vol1/iss1/4/">Female under-representation among philosophy majors: A map of the hypotheses and a survey of the evidence</a></li>
        </ul>

        <h3>Recent Reports:</h3>
        <ul>
                <li><a href="https://aap.org.au/Resources/Documents/publications/IPWPP/IPWPP_ExecutiveSummary.pdf">Improving the Participation of Women in the Philosophy Profession; Executive Summary.</a> - Goddard, E.. Australasian Association of Philosophy.  </li>

                <li><a href="http://www.aap.org.au/Womeninphilosophy">A series of reports</a> - Australasian Association of Philosophy</li>
                <li><a href="http://onlinelibrary.wiley.com/doi/10.1111/j.1527-2001.2012.01306.x/full">Quantifying the Gender Gap: An Empirical Study of the Under-Representation of Women in Philosophy</a>  Paxton, M., Figdor, C., and Tiberius, V. (2012) Hypatia 27(4): 949–957.</li>
                <li><a href="http://www.newappsblog.com">Academic Placement Data and Analysis: 2015 Final Report.</a> Jennings, C.., Kyrilov, A., Cobb, P., Vlasits, J., Vinson, D. W., Montes, E., &amp; Franco, C. (2015) New APPS</li>
                <li><a href="https://goo.gl/QsuuTL">Program Review Report [Gender Composition], 2004-2011 - Executive Committee</a> American Philosophical Association Pacific Division</li>

        </ul>

        <h3>Deciding Where to Apply</h3>
        <ul>
                <li> <a href="http://www.gradguide.apaonline.org">The APA Guide to Graduate Programs in Philosophy:</a></li>
                <li><a href="http://web.csulb.edu/~jvancamp/Female_Friendly.html"> Female-Friendly Departments: A Modest Proposal for Picking Graduate Programs in Philosophy</a>- Julie Van Camp</li>
        </ul>



        <br/>
        <h1>Understanding &amp; Resolving Underrepresentation in Philosophy</h1>
        <h3>Underrepresentation in Philosophy:</h3>
        <ul>
            <li><a href="http://www.apaonline.org/?page=diversity_resources">APA Resources on Diversity and Inclusiveness.</a></li>
            <li><a href="http://bpa.ac.uk/resources/women-in-philosophy/good-practice">BPA/SWIP Best Practices.</a></li>
            <li><a href="http://www.theupdirectory.com/"> The UPDirectory.</a></li>
        </ul>


        <h3>Mentoring:</h3>
        <ul>
            <li><a href="http://www.philosophy.ku.edu/mentoring-project/">The Mentoring Project for Pre-tenure Women Faculty in Philosophy. </a></li>
            <li><a href="http://www.piksi.org/">Philosophy in an Inclusive Key Summer Institute (PIKSI). </a></li>
            <li><a href="http://spwp.ucsd.edu/">The UCSD Summer Program for Women in Philosophy (UCSD SPWP).</a></li>
        </ul>


        <h3>Implicit Bias &amp; Stereotype Threat:</h3>
        <ul>
            <li><a href="http://biasproject.org/">Implicit Bias &amp; Philosophy International Research Project. </a></li>
            <li><a href="https://www.youtube.com/watch?v=FM6mbSiD3eA">Cultures of Brilliance and Academic Gender Gaps - Special Feature</a> Leslie, S.</li>
            <li><a href="http://www.philosophy.rutgers.edu/graduate-program/climate/133-graduate/climate/529-climate-of-women-implicit-bias">Implicit Bias</a> Rutgers University. </li>
            <li><a href="http://www.philosophy.rutgers.edu/graduate-program/climate/133-graduate/climate/530-climate-for-women-stereotype-threat">Stereotype Threat</a> Rutgers University. </li>
        </ul>



        <h3>Pedagogy:</h3>
        <ul>
            <li><a href="http://phildiversity.weebly.com/">Best practices for the Inclusive Philosophy Classroom</a></li>
            <li><a href="http://consc.net/norms.html">Guidelines for respectful, constructive, and inclusive philosophical discussion.</a> Chalmers, D. </li>
            <li><a href="https://sites.google.com/site/adrianmitchellcurrie/inclusiveness">Inclusiveness.</a> Currie, A.</li>
            <li><a href="http://www.apaonline.org/members/group_content_view.asp?group=110430&amp;id=380970">Diversity and Inclusive Syllabus Collection,</a> APA. </li>
            <li><a href="http://www.socalmap.org">SoCal Map Graduate Working Group on Inclusive Pedagogy</a></li>
            <li><a href="http://www.teachphilosophy101.org/">Teach Philosophy 101.</a></li>
        </ul>

        <h3>Publishing:</h3>
        <ul>
            <li><a href="http://blog.apaonline.org/2017/05/25/how-to-improve-the-situation-for-women-in-philosophy/">How to Improve the Situation for Women in Philosophy</a> Hassoun, N.</li>
            <li><a href="https://link.springer.com/article/10.1007/s11098-017-0919-0">New data on the representation of women in philosophy journals: 2004–2015.</a>  Wilhelm, I., Conklin, S.L. &amp; Hassoun, N. </li>
            <li><a href="http://www.newappsblog.com/2014/04/a-bechdel-test-for-philosophy-papers.html">A Bechdel Test for Philosophy Papers.</a> De Cruz, H. </li>
            <li><a href="http://schwitzsplinters.blogspot.com/2015/12/how-prominently-is-womens-philosophical.html">How Prominently Is Women's Philosophical Work Discussed? One Empirical Measure.</a> Schwitzgebel, E. </li>
        </ul>

        <br/>
        <h1>Groups and Organizations</h1>
        <ul>
                <li><a href="http://www.cbwp.ktgphd.com/">Collegium of Black Women Philosophers</a></li>
                <li><a href="http://www.mapforthegap.com/">Minorities and Philosophy</a></li>
                <li><a href="http://www.uh.edu/~cfreelan/SWIP/index.html">Society for Women in Philosophy</a></li>
                <li><a href="http://web.mit.edu/wphtf/Welcome.html">Women in Philosophy Task Force</a></li>
                <li><a href="http://philosophycommons.typepad.com/disability_and_disadvanta/">Discrimination and Disadvantage</a></li>
        </ul>






        <br/>
        <h1>Further Resources</h1>
        <ul>
                <li><a href="http://sallyhaslanger.weebly.com/equity-resources.html">Equity Resources</a></li>
        </ul>

    </Layout>
)

export default IndexPage

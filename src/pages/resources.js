import React from 'react'
import Layout from '../components/layout'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'


const IndexPage = () => (
    <Layout>
        <h1>Other Data on Women in Philosophy</h1>

        <h3>Graduate Programs &amp; PhDs:</h3>
            <ul>
                <li>Survey of Earned Doctorates Philosophy Data on Gender, Ethnicity, and Race - Maintained by Eric Schwitzgebel (with NSF permission): <a href="http://www.faculty.ucr.edu/~eschwitz/SED.htm">http://www.faculty.ucr.edu/~eschwitz/SED.htm</a></li>

                <li>Survey of Earned Doctorates %Women - Sally Haslanger: <a href="https://goo.gl/yrvFYS">https://goo.gl/yrvFYS</a></li>

                <li>See also the APA Fact Sheet on Women in Philosophy: <a href="http://c.ymcdn.com/sites/www.apaonline.org/resource/resmgr/Data_on_Profession/Women_in_Philosophy.pdf">http://c.ymcdn.com/sites/www.apaonline.org/resource/resmgr/Data_on_Profession/Women_in_Philosophy.pdf</a></li>
            </ul>

        <h3>Faculty:</h3>
        <ul>
        <li>Faculty Search Resource Pages available at <a href="https://www.provost.iastate.edu/faculty-and-staff-resources/development/isu-advance/faculty-resources/resource-pages">https://www.provost.iastate.edu/faculty-and-staff-resources/development/isu-advance/faculty-resources/resource-pages</a>
        </li>
                <li>Academic Placement Data and Analysis - Jennings, C.., Kyrilov, A., Cobb, P., Vlasits, J., Vinson, D. W., Montes, E., &amp; Franco, C.: <a href="http://placementdata.com/">http://placementdata.com/</a></li>
                        <li>Tenured/tenure-track faculty women at 98 U.S. doctoral programs in philosophy. Maintained by Julie Van Camp (2004-2016). Website.  Available at:
        <a href="https://web.csulb.edu/~jvancamp/doctoral_2004.html">https://web.csulb.edu/~jvancamp/doctoral_2004.html</a></li>
                                <li>Statistics Compiled by MAP. Word Document. Available at: <a href="http://www.mapforthegap.com/resources.html">http://www.mapforthegap.com/resources.html</a></li>

                                <li>See also the APA Committee on the Status of Women Data on Women in Philosophy page: <a href="http://www.apaonlinecsw.org/data-on-women-in-philosophy">http://www.apaonlinecsw.org/data-on-women-in-philosophy</a></li>
                                <li>Women in Philosophy: Quantitative Analyses of Specialization, Prevalence, Visibility, and Generational Change - Schwitzgebel, E.  &amp; Dicey Jennings, C.:
        <a href="http://faculty.ucr.edu/~eschwitz/SchwitzAbs/WomenInPhil.htm">http://faculty.ucr.edu/~eschwitz/SchwitzAbs/WomenInPhil.htm</a></li>
                                <li>Blog of the APA:
        <a href="https://blog.apaonline.org/?s=hassoun">https://blog.apaonline.org/?s=hassoun</a></li>

         </ul>

        <h3>Professional Activity:</h3>
        APA Membership Demographics. Website. Available at: <a href="http://www.apaonline.org/?demographics">http://www.apaonline.org/?demographics</a>
        Percentage of Women at APA Meetings, 1955, 1975, 1995, 2015. Eric Schwitzgebel: Blog. Available from: <a href="http://schwitzsplinters.blogspot.com/2015/11/percentage-of-women-at-apa-meetings.html">http://schwitzsplinters.blogspot.com/2015/11/percentage-of-women-at-apa-meetings.html</a>
        <h3>Publishing:</h3>
        Gender and Citation in Four General-Interest Philosophy Journals, 1993-2013.  Kieran Healy: Blog. Available from:
        <a href="http://kieranhealy.org/blog/archives/2015/02/25/gender-and-citation-in-four-general-interest-philosophy-journals-1993-2013/">http://kieranhealy.org/blog/archives/2015/02/25/gender-and-citation-in-four-general-interest-philosophy-journals-1993-2013/</a>
        Lewis and the Women. Kieran Healy: Blog. Available from: <a href="http://kieranhealy.org/blog/archives/2013/06/19/lewis-and-the-women/">http://kieranhealy.org/blog/archives/2013/06/19/lewis-and-the-women/</a>
        Only 13% of Authors in Five Leading Philosophy Journals Are Women. Eric Schwitzgebel: Blog. Available from: <a href="http://schwitzsplinters.blogspot.com/2015/12/only-13-of-authors-in-five-leading.html">http://schwitzsplinters.blogspot.com/2015/12/only-13-of-authors-in-five-leading.html</a>
        Female under-representation among philosophy majors: A map of the hypotheses and a survey of the evidence. Available from <a href="http://ir.lib.uwo.ca/fpq/vol1/iss1/4/">http://ir.lib.uwo.ca/fpq/vol1/iss1/4/</a>
        <h3>Recent Reports:</h3>
        Goddard, E. (2008a) “Improving the Participation of Women in the Philosophy Profession; Executive Summary.” Australasian Association of Philosophy. Available from: <a href="http://www.aap.org.au">http://www.aap.org.au</a>. [30 November 2015].
        ___. (2008b) “Improving the Participation of Women in the Philosophy Profession; Report A: Staffing by gender in Philosophy Programs in Australian Universities.” Australasian Association of Philosophy. Available from: <a href="http://www.aap.org.au">http://www.aap.org.au</a>
        ___. (2008c) “Improving the Participation of Women in the Philosophy Profession; Report B: Appointments by Gender in Philosophy Programs in Australian Universities.” Australasian Association of Philosophy. Available from: <a href="http://www.aap.org.au">http://www.aap.org.au</a>
        ___. (2008d) “Improving the Participation of Women in the Philosophy Profession; Report C: Students by Gender in Philosophy Programs in Australian Universities.” Australasian Association of Philosophy. Available from: <a href="http://www.aap.org.au">http://www.aap.org.au</a>
        A series of reports: <a href="http://www.aap.org.au/Womeninphilosophy">http://www.aap.org.au/Womeninphilosophy</a>
        Paxton, M., Figdor, C., and Tiberius, V. (2012) “Quantifying the Gender Gap: An Empirical Study of the Under-Representation of Women in Philosophy.” Hypatia 27(4): 949–957.<a href="http://onlinelibrary.wiley.com/doi/10.1111/j.1527-2001.2012.01306.x/full">http://onlinelibrary.wiley.com/doi/10.1111/j.1527-2001.2012.01306.x/full</a>
        Jennings, C.., Kyrilov, A., Cobb, P., Vlasits, J., Vinson, D. W., Montes, E., &amp; Franco, C. (2015) “Academic Placement Data and Analysis: 2015 Final Report.” 01 September 2015. New APPS: Blog. Available from: <a href="http://www.newappsblog.com">http://www.newappsblog.com</a>. [30 November 2015] <a href="https://goo.gl/vq82IG">https://goo.gl/vq82IG</a>
        Program Review Report [Gender Composition], 2004-2011 - Executive Committee, American Philosophical Association Pacific Division: <a href="https://goo.gl/QsuuTL">https://goo.gl/QsuuTL</a>
        <h3>Deciding Where to Apply</h3>
        The APA Guide to Graduate Programs in Philosophy: <a href="http://www.gradguide.apaonline.org">http://www.gradguide.apaonline.org</a>
        Female-Friendly Departments: A Modest Proposal for Picking Graduate Programs in Philosophy - Julie Van Camp: <a href="http://web.csulb.edu/~jvancamp/Female_Friendly.html">http://web.csulb.edu/~jvancamp/Female_Friendly.html</a>
        <h1>Understanding &amp; Resolving Underrepresentation in Philosophy</h1>
        <h3>Underrepresentation in Philosophy:</h3>
        APA Resources on Diversity and Inclusiveness. Website. Available at: <a href="http://www.apaonline.org/?page=diversity_resources">http://www.apaonline.org/?page=diversity_resources</a>
        BPA/SWIP Best Practices. Website. Available at: <a href="http://bpa.ac.uk/resources/women-in-philosophy/good-practice">http://bpa.ac.uk/resources/women-in-philosophy/good-practice</a>
        The UPDirectory. Website. Available at: <a href="http://www.theupdirectory.com/">http://www.theupdirectory.com/</a>
        <h3>Mentoring:</h3>
        The Mentoring Project for Pre-tenure Women Faculty in Philosophy. Website. Available at: <a href="http://www.philosophy.ku.edu/mentoring-project/">http://www.philosophy.ku.edu/mentoring-project/</a>
        Philosophy in an Inclusive Key Summer Institute (PIKSI). Website. Available at: <a href="http://www.piksi.org/">http://www.piksi.org/</a>
        The UCSD Summer Program for Women in Philosophy (UCSD SPWP). Website. Available at: <a href="http://spwp.ucsd.edu/">http://spwp.ucsd.edu/</a>
        <h3>Implicit Bias &amp; Stereotype Threat:</h3>
        Implicit Bias &amp; Philosophy International Research Project. Website. Available at: <a href="http://biasproject.org/">http://biasproject.org/</a>
        Leslie, S. “Cultures of Brilliance and Academic Gender Gaps - Special Feature” Video. Available at: <a href="https://www.youtube.com/watch?v=FM6mbSiD3eA">https://www.youtube.com/watch?v=FM6mbSiD3eA</a>
        Rutgers University. “Implicit Bias” Website. Available at: <a href="http://www.philosophy.rutgers.edu/graduate-program/climate/133-graduate/climate/529-climate-of-women-implicit-bias">http://www.philosophy.rutgers.edu/graduate-program/climate/133-graduate/climate/529-climate-of-women-implicit-bias</a>
        Rutgers University. “Stereotype Threat” Website. Available at: <a href="http://www.philosophy.rutgers.edu/graduate-program/climate/133-graduate/climate/530-climate-for-women-stereotype-threat">http://www.philosophy.rutgers.edu/graduate-program/climate/133-graduate/climate/530-climate-for-women-stereotype-threat</a>
        <h3>Pedagogy:</h3>
        Best practices for the Inclusive Philosophy Classroom. Website. Available at: <a href="http://phildiversity.weebly.com/">http://phildiversity.weebly.com/</a>
        Chalmers, D. “Guidelines for respectful, constructive, and inclusive philosophical discussion.” Website. Available at: <a href="http://consc.net/norms.html">http://consc.net/norms.html</a>
        Currie, A. “Inclusiveness.” Website. Available at: <a href="https://sites.google.com/site/adrianmitchellcurrie/inclusiveness">https://sites.google.com/site/adrianmitchellcurrie/inclusiveness</a>
        Diversity and Inclusive Syllabus Collection, APA. Website. Available at: <a href="http://www.apaonline.org/members/group_content_view.asp?group=110430&amp;id=380970">http://www.apaonline.org/members/group_content_view.asp?group=110430&amp;id=380970</a>
        SoCal Map Graduate Working Group on Inclusive Pedagogy. Website. Available at: <a href="http://www.socalmap.org">http://www.socalmap.org</a>
        Teach Philosophy 101. Website. Available at: <a href="http://www.teachphilosophy101.org/">http://www.teachphilosophy101.org/</a>
        <h3>Publishing:</h3>
        Hassoun, N. “How to Improve the Situation for Women in Philosophy.” Blog. Available at: <a href="http://blog.apaonline.org/2017/05/25/how-to-improve-the-situation-for-women-in-philosophy/">http://blog.apaonline.org/2017/05/25/how-to-improve-the-situation-for-women-in-philosophy/</a>
        Wilhelm, I., Conklin, S.L. &amp; Hassoun, N. “New data on the representation of women in philosophy journals: 2004–2015.” Article. Available at: <a href="https://link.springer.com/article/10.1007/s11098-017-0919-0">https://link.springer.com/article/10.1007/s11098-017-0919-0</a>
        De Cruz, H. “A Bechdel Test for Philosophy Papers.” Blog. Available at: <a href="http://www.newappsblog.com/2014/04/a-bechdel-test-for-philosophy-papers.html">http://www.newappsblog.com/2014/04/a-bechdel-test-for-philosophy-papers.html</a>
        Schwitzgebel, E. “How Prominently Is Women's Philosophical Work Discussed? One Empirical Measure.” Blog. Available at: <a href="http://schwitzsplinters.blogspot.com/2015/12/how-prominently-is-womens-philosophical.html">http://schwitzsplinters.blogspot.com/2015/12/how-prominently-is-womens-philosophical.html</a>
        <h1>Groups and Organizations</h1>
        Collegium of Black Women Philosophers: <a href="http://www.cbwp.ktgphd.com/">http://www.cbwp.ktgphd.com/</a>
        Minorities and Philosophy: <a href="http://www.mapforthegap.com/">http://www.mapforthegap.com/</a>
        Society for Women in Philosophy: <a href="http://www.uh.edu/~cfreelan/SWIP/index.html">http://www.uh.edu/~cfreelan/SWIP/index.html</a>
        Women in Philosophy Task Force: <a href="http://web.mit.edu/wphtf/Welcome.html">http://web.mit.edu/wphtf/Welcome.html</a>
        Discrimination and Disadvantage: <a href="http://philosophycommons.typepad.com/disability_and_disadvanta/">http://philosophycommons.typepad.com/disability_and_disadvanta/</a>
        <h1>Further Resources</h1>
        Equity Resources: <a href="http://sallyhaslanger.weebly.com/equity-resources.html">http://sallyhaslanger.weebly.com/equity-resources.html</a>
    </Layout>
)

export default IndexPage

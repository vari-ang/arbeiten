import Home from '../components/Home.vue';
import Team from '../components/Team.vue';
import Job from '../components/Job.vue';
import Freelance from '../components/Freelance.vue';
import Profile from '../components/Profile.vue';
import SkillList from '../components/SkillList.vue';
import History from '../components/History.vue';
import SignUp from '../components/SignUp.vue';
import SignIn from '../components/SignIn.vue';
import NotFound from '../components/NotFound.vue';

export default [
    { path: '/', component: Home },
    { path: '/team', component: Team },
    { path: '/job/:id', component: Job },
    { path: '/freelance/:id', component: Freelance },
    { path: '/profile', component: Profile },
    { path: '/skill-list', component: SkillList },
    { path: '/history', component: History },
    { path: '/sign-up', component: SignUp },
    { path: '/sign-in', component: SignIn },

    { path: '*', component: NotFound }
]
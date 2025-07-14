import { VideoPlayer } from '../components/VideoPlayer';
import Mission from '../components/Mission';

export default function HijrahJourney() {
    return (
        < section className="py-10 text-center px-4 max-w-full mx-auto text-primary" >
            <h2 className="text-6xl my-10 ">Your Hijrah Journey</h2>
            <div className="aspect-video w-full max-w-4xl mx-auto mb-6 rounded-lg overflow-hidden">
                <VideoPlayer src="https://res.cloudinary.com/dla5fna8n/video/upload/v1751886783/tabinda-campaign-fix_eilzds.mp4" />
            </div>
            <h1 className="text-3xl text-center leading-10 mx-auto mb-10 max-w-6xl tracking-wider">
                Tabinda hadir menemani hijrah muslimah dengan busana anggun yang bermakna. Lebih dari sekadar pakaian, setiap karya membawa semangat kepedulian—mulai dari pemberdayaan perempuan lokal hingga komitmen tanpa plastik. Kami ingin menjadi teman dalam perjalanan hidup yang indah, penuh arti, dan keberkahan.
            </h1>

            <Mission />
        </section >

    );
}
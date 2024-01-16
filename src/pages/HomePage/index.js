import { Style } from "./style";
import PrimaryLayout from '../../components/Layout/PrimaryLayout';
import HelemetFunc from "../../components/Helmet";
import MovieSlider from "../../components/Carousel/Movies";
import HeroSection from "../../components/HeroSection";
import GenresApi from "../../components/Genres";
import AccountBanner from "../../components/Account";
import GenresSlider from "../../components/Carousel/Genres";
import Movies from "../../components/Carousel/Movies/Slider";
import Genres from "../../components/Carousel/Genres/Slider";

export default function HomePage() {
    const genres = GenresApi();
    return (
        <PrimaryLayout>
            <HelemetFunc title={'Crackle - Watch Movies Online, Free TV Shows, &amp; Original Online Series'} />
            <Style>
                <HeroSection id={'18'} genre_id={'3'} />
                <AccountBanner />
                {genres.map((genre, id) => {
                    return (
                        <MovieSlider key={id} name={genre.name} id={genre.id} page={1} />
                        // <Movies key={id} name={genre.name} id={genre.id} page={1} />
                    );
                })}
                <GenresSlider />
            </Style>
        </PrimaryLayout>
    );
}
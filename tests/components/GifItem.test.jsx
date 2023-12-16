import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('Test of <GifItem />', () => {
    const title = 'ImgTest';
    const url = 'https://test-img.com/img.jpg';

    test('should match with snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    })

    test('should have the img with alt and src props', () => {
        render(<GifItem title={title} url={url} />)
        //screen.debug();
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });

    test('should exists the title', () => {
        render(<GifItem title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy();
    });
})
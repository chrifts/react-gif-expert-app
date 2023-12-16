import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Tests in useFetchGifs hook', () => {
    test('should return the initial state', () => {
        const { result } = renderHook(() => {
            return useFetchGifs('One Punch');
        });
        const { gifs, isLoading } = result.current;

        expect(gifs.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should return an array with gifs and loading in false', async () => {
        const { result } = renderHook(() => {
            return useFetchGifs('One Punch');
        });

        await waitFor(
            () => expect(result.current.gifs.length).toBeGreaterThan(0)
        );

        const { gifs, isLoading } = result.current;

        expect(gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});
package com.example;

public class GameInfoService {

    private long startTime;
    private int applesEaten;

    public GameInfoService() {
        this.startTime = System.currentTimeMillis();
        this.applesEaten = 0;
    }

    public void incrementApplesEaten() {
        applesEaten++;
    }

    public int getApplesEaten() {
        return applesEaten;
    }

    public String getElapsedTime() {
        long elapsedTime = System.currentTimeMillis() - startTime;
        int minutes = (int) (elapsedTime / 60000);
        int seconds = (int) ((elapsedTime / 1000) % 60);
        int milliseconds = (int) (elapsedTime % 1000);

        return String.format("%02d:%02d:%03d", minutes, seconds, milliseconds);
    }
}

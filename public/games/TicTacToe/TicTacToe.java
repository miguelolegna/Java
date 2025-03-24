public class TicTacToe {
    private String[] gameState = {"", "", "", "", "", "", "", "", ""};
    private String currentPlayer = "X";
    private boolean gameActive = true;

    private final int[][] winningConditions = {
        {0, 1, 2},
        {3, 4, 5},
        {6, 7, 8},
        {0, 3, 6},
        {1, 4, 7},
        {2, 5, 8},
        {0, 4, 8},
        {2, 4, 6}
    };

    // Método para manipular o clique de uma célula
    public String handleCellClick(int index) {
        if (!gameActive || !gameState[index].equals("")) {
            return "Jogada inválida";
        }

        gameState[index] = currentPlayer;

        if (checkWinner()) {
            gameActive = false;
            return "Jogador " + currentPlayer + " venceu!";
        }

        if (!containsEmptyCell()) {
            gameActive = false;
            return "Empate!";
        }

        // Alternar o jogador
        currentPlayer = currentPlayer.equals("X") ? "O" : "X";
        return "Vez do jogador " + currentPlayer;
    }

    // Verifica se há um vencedor
    private boolean checkWinner() {
        for (int[] condition : winningConditions) {
            int a = condition[0];
            int b = condition[1];
            int c = condition[2];
            if (!gameState[a].equals("") && gameState[a].equals(gameState[b]) && gameState[a].equals(gameState[c])) {
                return true;
            }
        }
        return false;
    }

    // Verifica se ainda há células vazias
    private boolean containsEmptyCell() {
        for (String cell : gameState) {
            if (cell.equals("")) {
                return true;
            }
        }
        return false;
    }

    // Reinicia o jogo
    public void resetGame() {
        gameState = new String[]{"", "", "", "", "", "", "", "", ""};
        gameActive = true;
        currentPlayer = "X";
    }

    public String getCurrentPlayer() {
        return currentPlayer;
    }

    public String[] getGameState() {
        return gameState;
    }
}

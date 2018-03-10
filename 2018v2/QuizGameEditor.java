import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.event.*;

public class QuizGameEditor extends JFrame
{
	private Container mContentPane;
	private JList mQuestions;
	private JList mAnswers;
	private JTable mTable;

	public QuizGameEditor()
	{
		super("QuizGameEditor");
      	mContentPane = getContentPane();

        Object[][] data = {
            {"Mary", "Campione", "Snowboarding", new Integer(5), new Boolean(false)},
            {"Alison", "Huml", "Rowing", new Integer(3), new Boolean(true)},
            {"Kathy", "Walrath", "Chasing toddlers", new Integer(2), new Boolean(false)},
            {"Sharon", "Zakhour", "Speed reading", new Integer(20), new Boolean(true)},
            {"Angela", "Lih", "Teaching high school", new Integer(4), new Boolean(false)}
        };

        String[] columnNames = {"First Name", "Last Name", "Sport", "# of Years", "Vegetarian"};

        mTable = new JTable(data, columnNames);
        mTable.setPreferredScrollableViewportSize(new Dimension(500, 70));

		mTable.addMouseListener(
			new MouseAdapter()
			{
				public void mouseClicked(MouseEvent e)
				{
					printDebugData(mTable);
				}
			} );


        //Create the scroll pane and add the table to it.
        JScrollPane scrollPane = new JScrollPane(mTable);

        //Add the scroll pane to this window.
        mContentPane.add(scrollPane, BorderLayout.CENTER);

        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e) {
                System.exit(0);
            }
        });
	}



    private void printDebugData(JTable table)
    {
        int numRows = table.getRowCount();
        int numCols = table.getColumnCount();
        javax.swing.table.TableModel model = table.getModel();

        System.out.println("Value of data: ");
        for (int i=0; i < numRows; i++)
        {
            System.out.print("    row " + i + ":");
            for (int j=0; j < numCols; j++)
            {
                System.out.print("  " + model.getValueAt(i, j));
            }
            System.out.println();
        }
        System.out.println("--------------------------");
    }



	public static void main(String args[])
	{

		QuizGameEditor qge = new QuizGameEditor();
		qge.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	  	qge.setSize(400, 400);
	  	qge.pack();
	  	qge.setVisible(true);

	}
}